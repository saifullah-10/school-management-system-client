"use client"

import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Checkbox, Paper, Typography,
} from '@mui/material';

// Define the types
interface AttendanceRecord {
  name: string;
  attendance: Array<string>; // 'P' for present, 'A' for absent, '' for no entry
}

// Sample Data
const attendanceData: AttendanceRecord[] = [
  { name: 'Michele Johnson', attendance: ['P', 'P', 'P', 'A', 'P', '-', 'P', 'P', 'A', 'P', '-', 'A', '-', 'P', '-', 'P', '-', 'A', 'P', '-', 'A', 'P', 'A', 'P', 'P', '-', 'P', 'P', '-', 'P'] },
  { name: 'Richi Akon', attendance: ['P', 'A', 'P', 'A', 'P', '-', 'P', 'A', 'A', 'P', '-', 'P', '-', 'A', '-', 'A', '-', 'P', 'P', '-', 'P', 'P', 'A', 'P', 'A', '-', 'P', 'P', '-', 'P'] },
  { name: 'Amanda Kherr', attendance: ['P', 'P', 'A', 'P', 'P', '-', 'A', 'P', 'A', 'P', '-', 'P', '-', 'P', '-', 'P', '-', 'A', 'P', '-', 'A', 'P', 'P', 'A', 'P', '-', 'P', 'A', '-', 'P'] }
];

const AttendanceTable: React.FC = () => {

  return (
    <TableContainer component={Paper} sx={{ width: { xs: "97vw", sm: "62vw", md: "70vw", lg: "78vw" } , overflowX: 'auto' , margin: '0 auto'}}>
      <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
        Attendance Sheet of Class One: Section A, April 2019
      </Typography>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Students</TableCell>
            {/* Loop over 30 days of the month */}
            {[...Array(30)].map((_, index) => (
              <TableCell key={index + 1} align="center">{index + 1}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {attendanceData.map((record, index) => (
            <TableRow key={index}>
              <TableCell>{record.name}</TableCell>
              {record.attendance.map((status, idx) => (
                <TableCell key={idx} align="center">
                  {status === 'P' ? (
                    <Checkbox checked color="success" disabled />
                  ) : status === 'A' ? (
                    <Checkbox checked={false} color="error" disabled />
                  ) : (
                    '-'
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AttendanceTable;
