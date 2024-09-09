"use client";

import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, TextField, Button, Paper,
} from '@mui/material';
import { BsPersonWorkspace } from 'react-icons/bs';

// Dummy data for the table
interface Student {
  roll: string;
  photo: string;
  name: string;
  gender: string;
  class: number;
  section: string;
  parents: string;
  address: string;
  dob: string;
  phone: string;
  email: string;
}

const students: Student[] = [
  { roll: '#0021', photo: 'green', name: 'Mark Willy', gender: 'Male', class: 2, section: 'A', parents: 'Jack Sparrow', address: 'TA-107 Newyork', dob: '02/05/2001', phone: '+123 9988568', email: 'kazifahim@example.com' },
  { roll: '#0022', photo: 'blue', name: 'Jessia Rose', gender: 'Female', class: 1, section: 'A', parents: 'Maria Jamans', address: '59 Australia, Sydney', dob: '02/05/2001', phone: '+123 9988568', email: 'jessiarose@example.com' },
  { roll: '#0023', photo: 'red', name: 'John Doe', gender: 'Male', class: 2, section: 'B', parents: 'Jane Doe', address: '123 Main St', dob: '02/05/2001', phone: '+123 9988568', email: 'johndoe@example.com' },
  // Add more students if necessary
];

const StudentTable: React.FC = () => {
  const [searchRoll, setSearchRoll] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchClass, setSearchClass] = useState('');

  const [filteredData, setFilteredData] = useState(students);

  const handleSearch = () => {
    const filtered = students.filter((student) => {
      const matchesRoll = searchRoll ? student.roll.toLowerCase().includes(searchRoll.toLowerCase()) : true;
      const matchesName = searchName ? student.name.toLowerCase().includes(searchName.toLowerCase()) : true;
      const matchesClass = searchClass ? student.class.toString() === searchClass : true;

      return matchesRoll && matchesName && matchesClass;
    });
    setFilteredData(filtered);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Students Data</h1>

      {/* Search fields */}
      <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 mb-4">
        <TextField
          label="Search by Roll"
          variant="outlined"
          size="small"
          className="w-full sm:w-1/3"
          value={searchRoll}
          onChange={(e) => setSearchRoll(e.target.value)}
        />
        <TextField
          label="Search by Name"
          variant="outlined"
          size="small"
          className="w-full sm:w-1/3"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <TextField
          label="Search by Class"
          variant="outlined"
          size="small"
          className="w-full sm:w-1/3"
          value={searchClass}
          onChange={(e) => setSearchClass(e.target.value)}
        />
        <div className="flex gap-2 mt-2 sm:mt-0">
          <Button
            variant="contained"
            color="primary"
            className="w-full sm:w-auto"
            onClick={handleSearch}
          >
            Search
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className="w-full sm:w-auto"
            onClick={() => {
              setSearchRoll('');
              setSearchName('');
              setSearchClass('');
              setFilteredData(students);
            }}
          >
            Reset
          </Button>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <TableContainer component={Paper}>
          <Table className="min-w-[600px]">
            <TableHead>
              <TableRow>
                <TableCell><Checkbox /></TableCell>
                <TableCell>Roll</TableCell>
                <TableCell>Photo</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell className="hidden md:table-cell">Class</TableCell>
                <TableCell>Section</TableCell>
                <TableCell className="hidden lg:table-cell">Parents</TableCell>
                <TableCell className="hidden md:table-cell">Address</TableCell>
                <TableCell className="hidden lg:table-cell">Date Of Birth</TableCell>
                <TableCell className="hidden lg:table-cell">Phone</TableCell>
                <TableCell className="hidden md:table-cell">E-mail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((student, index) => (
                <TableRow key={index}>
                  <TableCell><Checkbox /></TableCell>
                  <TableCell>{student.roll}</TableCell>
                  <TableCell><BsPersonWorkspace size={20}/> </TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.gender}</TableCell>
                  <TableCell className="hidden md:table-cell">{student.class}</TableCell>
                  <TableCell>{student.section}</TableCell>
                  <TableCell className="hidden lg:table-cell">{student.parents}</TableCell>
                  <TableCell className="hidden md:table-cell">{student.address}</TableCell>
                  <TableCell className="hidden lg:table-cell">{student.dob}</TableCell>
                  <TableCell className="hidden lg:table-cell">{student.phone}</TableCell>
                  <TableCell className="hidden md:table-cell">{student.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default StudentTable;
