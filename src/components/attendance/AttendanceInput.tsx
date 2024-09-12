"use client";

import React, { useState, useMemo } from 'react';
import {
  FormControl, InputLabel, Select, MenuItem, TextField, Button, Box, SelectChangeEvent
} from '@mui/material';

// Define the types
interface AttendanceRecord {
  name: string;
  attendance: Record<string, Record<string, 'P' | 'A' | '-'>>; // { date: { courseName: 'P' | 'A' | '-' } }
}

const AttendanceInput: React.FC = () => {
  const todayDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
  const [attendanceData, setAttendanceData] = useState<AttendanceRecord[]>(initialAttendanceData); // Initialize with sample data or fetch from API
  const [currentStudent, setCurrentStudent] = useState<string | ''>('');
  const [attendanceInputs, setAttendanceInputs] = useState<{ [studentName: string]: { [course: string]: 'P' | 'A' | '-' } }>({});

  // Extract courses from attendance data
  const courses = useMemo(() => {
    const allCourses = new Set<string>();
    if (attendanceData.length > 0) {
      Object.values(attendanceData[0].attendance).forEach(courseData => {
        Object.keys(courseData).forEach(course => allCourses.add(course));
      });
    }
    return Array.from(allCourses);
  }, [attendanceData]);

  const handleStudentChange = (event: SelectChangeEvent<string>) => {
    const studentName = event.target.value;
    setCurrentStudent(studentName);
    if (studentName) {
      const studentAttendance = attendanceData.find(record => record.name === studentName)?.attendance[todayDate] || {};
      setAttendanceInputs(prev => ({
        ...prev,
        [studentName]: studentAttendance
      }));
    }
  };

  const handleAttendanceChange = (course: string, status: 'P' | 'A' | '-') => {
    setAttendanceInputs(prev => ({
      ...prev,
      [currentStudent!]: {
        ...prev[currentStudent!],
        [course]: status
      }
    }));
  };

  const handleSubmit = () => {
    if (!currentStudent) return;

    const updatedData = attendanceData.map(record => {
      if (record.name === currentStudent) {
        return {
          ...record,
          attendance: {
            ...record.attendance,
            [todayDate]: attendanceInputs[currentStudent!]
          }
        };
      }
      return record;
    });

    setAttendanceData(updatedData); // Update local state or handle the data submission to API
  };

  return (
    <Box>
      <h2 className="text-xl font-semibold mb-2">Update Attendance</h2>

      <Box mb={4} display="flex" alignItems="center" flexWrap={'wrap'}>
        <FormControl variant="outlined" sx={{ mr: 2 }} className='w-52'>
          <InputLabel id="student-select-label">Student</InputLabel>
          <Select
            labelId="student-select-label"
            value={currentStudent}
            onChange={handleStudentChange}
            label="Student"
          >
            {attendanceData.map(record => (
              <MenuItem key={record.name} value={record.name}>{record.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Display today's date */}
        <TextField
          label="Date"
          value={todayDate}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          sx={{ width: 200, ml: 2 }}
        />
      </Box>

      {currentStudent && (
        <Box mb={4}>
          {courses.map(course => (
            <Box key={course} mb={2} display="flex" alignItems="center">
              <Box sx={{ flex: 1 }}>{course}</Box>
              <TextField
                select
                label="Attendance"
                value={attendanceInputs[currentStudent]?.[course] || '-'}
                onChange={(e) => handleAttendanceChange(course, e.target.value as 'P' | 'A' | '-')}
                sx={{ width: 150 }}
              >
                <MenuItem value="P">Present</MenuItem>
                <MenuItem value="A">Absent</MenuItem>
                <MenuItem value="-">-</MenuItem>
              </TextField>
            </Box>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={Object.keys(attendanceInputs[currentStudent] || {}).length < courses.length}
          >
            Submit
          </Button>
        </Box>
      )}
    </Box>
  );
};

// Sample Data with 10 Students and 17 Courses
const initialAttendanceData: AttendanceRecord[] = [
  { name: 'Michele Johnson', attendance: generateAttendanceData(10, 17) },
  { name: 'Richi Akon', attendance: generateAttendanceData(10, 17) },
  { name: 'Amanda Kherr', attendance: generateAttendanceData(10, 17) },
  { name: 'John Doe', attendance: generateAttendanceData(10, 17) },
  { name: 'Jane Smith', attendance: generateAttendanceData(10, 17) },
  { name: 'Emily Davis', attendance: generateAttendanceData(10, 17) },
  { name: 'Michael Brown', attendance: generateAttendanceData(10, 17) },
  { name: 'Sarah Wilson', attendance: generateAttendanceData(10, 17) },
  { name: 'David Lee', attendance: generateAttendanceData(10, 17) },
  { name: 'Olivia Harris', attendance: generateAttendanceData(10, 17) },
];

// Function to generate random attendance data for a given number of days and courses
function generateAttendanceData(days: number, coursesCount: number): Record<string, Record<string, 'P' | 'A' | '-'>> {
  const courses = Array.from({ length: coursesCount }, (_, i) => `DS${100 + i}`);
  const data: Record<string, Record<string, 'P' | 'A' | '-'>> = {};
  
  const startDate = new Date(); // Start from today
  for (let i = 0; i < days; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + i);
    const dateString = currentDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    data[dateString] = {};
    
    courses.forEach(course => {
      // Type assertion for the randomly selected value
      data[dateString][course] = (['P', 'A', '-'][Math.floor(Math.random() * 3)] as 'P' | 'A' | '-');
    });
  }
  
  return data;
}

export default AttendanceInput;
