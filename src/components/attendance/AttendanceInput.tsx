"use client";

import React, { useState, useEffect } from 'react';
import {
  FormControl, InputLabel, Select, MenuItem, TextField, Button, Box, SelectChangeEvent
} from '@mui/material';
import axiosInstance from '@/lib/axios';

// Define the types
interface AttendanceRecord {
  name: string;
  attendance: Record<string, Record<string, 'P' | 'A' | '-'>>; // { date: { courseName: 'P' | 'A' | '-' } }
}

const AttendanceInput: React.FC = () => {
  const todayDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
  const [attendanceData, setAttendanceData] = useState<AttendanceRecord[]>([]);
  const [currentStudent, setCurrentStudent] = useState<string | ''>('');
  const [attendanceInputs, setAttendanceInputs] = useState<{ [studentName: string]: { [course: string]: 'P' | 'A' | '-' } }>({});
  const [courses, setCourses] = useState<string[]>([]);
  const [studentNames, setStudentNames] = useState<string[]>([]);

  // Fetch student names and attendance data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch attendance data (which includes student names)
        const response = await axiosInstance.get<AttendanceRecord[]>('/attendance');

        const data = response.data;

        // Extract and set student names
        const names = data.map(record => record.name);
        setStudentNames(names);

        // Extract and set courses from fetched data
        const allCourses = new Set<string>();
        data.forEach(record => {
          Object.values(record.attendance).forEach(courseData => {
            Object.keys(courseData).forEach(course => allCourses.add(course));
          });
        });
        setCourses(Array.from(allCourses));

        // Set attendance data
        setAttendanceData(data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

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

  const handleSubmit = async () => {
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

    setAttendanceData(updatedData); // Update local state

    // Send updated attendance data to the backend
    try {
      const response = await axiosInstance.put(`/attendance/${currentStudent}`, {
        attendance: {
          [todayDate]: attendanceInputs[currentStudent!]
        }
      });
      if (response.status === 200) {
        console.log('Attendance updated successfully');
      }
    } catch (err) {
      console.error('Error updating attendance:', err);
    }
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
            {studentNames.map(name => (
              <MenuItem key={name} value={name}>{name}</MenuItem>
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
                value={attendanceInputs[currentStudent]?.[course] || "-"}
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
          >
            Submit
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default AttendanceInput;
