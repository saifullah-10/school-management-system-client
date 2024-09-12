"use client"

import { Box, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { GoDash } from 'react-icons/go';
import AttendanceInput from '@/components/attendance/AttendanceInput';

// Define the AttendanceRecord type
interface AttendanceRecord {
  name: string;
  attendance: Record<string, Record<string, 'P' | 'A' | '-'>>; // { date: { courseName: 'P' | 'A' | '-' } }
}

// Fetch all attendance records
const fetchAttendanceRecords = async (): Promise<AttendanceRecord[]> => {
  const response = await axiosInstance.get('/attendance');
  return response.data;
};

export default function AttendancePage() {
  const [selectedName, setSelectedName] = useState<string>('');

  // Use TanStack Query to fetch data
  const { data: records = [], isLoading, error } = useQuery({
    queryKey: ['attendanceRecords'],
    queryFn: fetchAttendanceRecords,
  });

  // Extract names, dates, and courses
  const names = records.map(record => record.name);
  const dates = Array.from(new Set(records.flatMap(record => Object.keys(record.attendance || {}))));
  const courses = records.length > 0 ? Array.from(new Set(Object.values(records[0].attendance || {}).flatMap(courseData => Object.keys(courseData)))) : [];

  // Find selected record
  const selectedRecord = records.find(record => record.name === selectedName) || { attendance: {} as Record<string, Record<string, 'P' | 'A' | '-'>> };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <Box>
      <h1 className="text-2xl text-center font-bold mb-4">Attendance of Students</h1>

      <AttendanceInput/>

      <Box mb={4} display="flex" alignItems="center">
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="name-select-label">Name</InputLabel>
          <Select
            labelId="name-select-label"
            value={selectedName}
            onChange={(e) => setSelectedName(e.target.value)}
            label="Name"
          >
            {names.map(name => (
              <MenuItem key={name} value={name}>{name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <TableContainer component={Paper} sx={{ width: { xs: "86vw", sm: "62vw", md: "70vw", lg: "77vw" } , overflowX: 'auto' , margin: '0 auto'}}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              {courses.map(course => (
                <TableCell key={course} align="center">{course}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dates.map(date => (
              <TableRow key={date}>
                <TableCell>{date}</TableCell>
                {courses.map(course => (
                  <TableCell key={course} align="center">
                    {selectedRecord.attendance[date]?.[course] === 'P' ? (
                      <FaCheck color='green'/>
                    ) : selectedRecord.attendance[date]?.[course] === 'A' ? (
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
}
