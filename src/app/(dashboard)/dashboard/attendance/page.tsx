"use client"

import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, MenuItem, Select, InputLabel, FormControl
} from '@mui/material';
import { ImCross } from 'react-icons/im';
import { FaCheck } from 'react-icons/fa';
import { GoDash } from 'react-icons/go';

// Define the types
interface AttendanceRecord {
  name: string;
  attendance: { [course: string]: Array<string> }; // { courseName: ['P', 'A', ...] }
}

// Sample Data with 10 Students and 17 Courses
const attendanceData: AttendanceRecord[] = [
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
function generateAttendanceData(days: number, coursesCount: number): { [course: string]: Array<string> } {
  const courses = Array.from({ length: coursesCount }, (_, i) => `DS${100 + i}`);
  const data: { [course: string]: Array<string> } = {};

  courses.forEach(course => {
    data[course] = Array.from({ length: days }, () => ['P', 'A', '-'][Math.floor(Math.random() * 3)]);
  });

  return data;
}

const AttendanceTable: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number>(1);

  const courses = Object.keys(attendanceData[0].attendance);
  const days = [...Array(10)].map((_, index) => index + 1);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Attendance of Student</h1>

      <div className="mb-4">
        <FormControl>
          <InputLabel id="date-select-label">Date</InputLabel>
          <Select
            labelId="date-select-label"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value as number)}
            label="Date"
          >
            {days.map(day => (
              <MenuItem key={day} value={day}>{day}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <TableContainer component={Paper} sx={{ width: { xs: "95vw", sm: "62vw", md: "70vw", lg: "78vw" }, overflowX: 'auto', margin: '0 auto' }}>
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
                    {record.attendance[course][selectedDate - 1] === 'P' ? (
                      <FaCheck color='green'/>
                    ) : record.attendance[course][selectedDate - 1] === 'A' ? (
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
    </div>
  );
};

export default AttendanceTable;
