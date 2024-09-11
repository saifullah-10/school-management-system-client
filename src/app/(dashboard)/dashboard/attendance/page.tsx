"use client";

import React, { useState, useMemo } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, MenuItem, Select, InputLabel, FormControl, Box, SelectChangeEvent
} from '@mui/material';
import { ImCross } from 'react-icons/im';
import { FaCheck } from 'react-icons/fa';
import { GoDash } from 'react-icons/go';
import AttendanceInput from '@/components/attendance/AttendanceInput';

// Define the types
interface AttendanceRecord {
  name: string;
  attendance: { [date: string]: { [course: string]: string } }; // { date: { courseName: 'P' | 'A' | '-' } }
}

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
function generateAttendanceData(days: number, coursesCount: number): { [date: string]: { [course: string]: string } } {
  const courses = Array.from({ length: coursesCount }, (_, i) => `DS${100 + i}`);
  const data: { [date: string]: { [course: string]: string } } = {};
  
  const startDate = new Date(); // Start from today
  for (let i = 0; i < days; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + i);
    const dateString = currentDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    data[dateString] = {};
    
    courses.forEach(course => {
      data[dateString][course] = ['P', 'A', '-'][Math.floor(Math.random() * 3)];
    });
  }
  
  return data;
}

const AttendanceTable: React.FC = () => {
  const [attendanceData] = useState<AttendanceRecord[]>(initialAttendanceData); // Use sample data or fetch from API
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);

  // Extract dates and courses from attendance data
  const dates = useMemo(() => {
    const allDates = new Set<string>();
    attendanceData.forEach(record => {
      Object.keys(record.attendance).forEach(date => allDates.add(date));
    });
    return Array.from(allDates).sort();
  }, [attendanceData]);

  const courses = useMemo(() => {
    const allCourses = new Set<string>();
    if (attendanceData.length > 0) {
      Object.values(attendanceData[0].attendance).forEach(courseData => {
        Object.keys(courseData).forEach(course => allCourses.add(course));
      });
    }
    return Array.from(allCourses);
  }, [attendanceData]);

  const handleDateChange = (event: SelectChangeEvent<string>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <Box p={2}>
      <h1 className="text-2xl font-bold mb-4">Attendance of Students</h1>

      <AttendanceInput/>

      <Box mb={4} display="flex" alignItems="center">
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="date-select-label">Date</InputLabel>
          <Select
            labelId="date-select-label"
            value={selectedDate}
            onChange={handleDateChange}
            label="Date"
          >
            {dates.map(date => (
              <MenuItem key={date} value={date}>{date}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <TableContainer component={Paper} sx={{ width: { xs: "86vw", sm: "62vw", md: "70vw", lg: "76vw" }, overflowX: 'auto', margin: '0 auto' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Students</TableCell>
              {courses.map(course => (
                <TableCell key={course} align="center">{course}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceData.map((record, index) => (
              <TableRow key={index}>
                <TableCell>{record.name}</TableCell>
                {courses.map(course => (
                  <TableCell key={course} align="center">
                    {record.attendance[selectedDate]?.[course] === 'P' ? (
                      <FaCheck color='green'/>
                    ) : record.attendance[selectedDate]?.[course] === 'A' ? (
                      <ImCross color='red' />
                    ) : (
                      <GoDash />
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AttendanceTable;
