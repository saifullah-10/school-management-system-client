"use client";

import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, TextField, Button, Paper,
} from '@mui/material';
import { BsPersonWorkspace } from 'react-icons/bs';

// Dummy data for the table
interface Teacher {
    id: string;
    photo: string;
    name: string;
    gender: string;
    class: number;
    section: string;
    address: string;
    phone: string;
    email: string;
}

const teachers: Teacher[] = [
    { id: '#0021', photo: 'green', name: 'Mark Willy', gender: 'Male', class: 2, section: 'A', address: 'TA-107 Newyork', phone: '+123 9988568', email: 'kazifahim@example.com' },
    { id: '#0022', photo: 'blue', name: 'Jessia Rose', gender: 'Female', class: 1, section: 'A', address: '59 Australia, Sydney', phone: '+123 9988568', email: 'jessiarose@example.com' },
    { id: '#0023', photo: 'red', name: 'John Doe', gender: 'Male', class: 2, section: 'B',  address: '123 Main St',  phone: '+123 9988568', email: 'johndoe@example.com' },
    // Add more teachers if necessary
];

const TeacherTable: React.FC = () => {
    const [searchId, setSearchId] = useState('');
    const [searchName, setSearchName] = useState('');
    const [searchClass, setSearchClass] = useState('');

    const [filteredData, setFilteredData] = useState(teachers);

    const handleSearch = () => {
        const filtered = teachers.filter((teacher) => {
            const matchesId = searchId ? teacher.id.toLowerCase().includes(searchId.toLowerCase()) : true;
            const matchesName = searchName ? teacher.name.toLowerCase().includes(searchName.toLowerCase()) : true;
            const matchesClass = searchClass ? teacher.class.toString() === searchClass : true;

            return matchesId && matchesName && matchesClass;
        });
        setFilteredData(filtered);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">All Teachers Data</h1>

            {/* Search fields */}
            <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 mb-4">
                <TextField
                    label="Search by Id"
                    variant="outlined"
                    size="small"
                    className="w-full sm:w-1/3"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
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
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 mt-2 sm:mt-0">
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
                            setSearchId('');
                            setSearchName('');
                            setSearchClass('');
                            setFilteredData(teachers);
                        }}
                    >
                        Reset
                    </Button>
                </div>
            </div>

            {/* Responsive Table */}
            <div style={{ overflowX: 'auto' }}>
                <TableContainer component={Paper} sx={{ width: { xs: "80vw", sm: "60vw", md: "70vw", lg: 1100 } }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><Checkbox /></TableCell>
                                <TableCell>Id</TableCell>
                                <TableCell>Photo</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell className="hidden md:table-cell">Class</TableCell>
                                <TableCell>Section</TableCell>
                                <TableCell className="hidden md:table-cell">Address</TableCell>
                                <TableCell className="hidden lg:table-cell">Phone</TableCell>
                                <TableCell className="hidden md:table-cell">E-mail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredData.map((teacher, index) => (
                                <TableRow key={index}>
                                    <TableCell><Checkbox /></TableCell>
                                    <TableCell>{teacher.id}</TableCell>
                                    <TableCell><BsPersonWorkspace size={20} /></TableCell>
                                    <TableCell>{teacher.name}</TableCell>
                                    <TableCell>{teacher.gender}</TableCell>
                                    <TableCell className="hidden md:table-cell">{teacher.class}</TableCell>
                                    <TableCell>{teacher.section}</TableCell>
                                    <TableCell className="hidden md:table-cell">{teacher.address}</TableCell>
                                    <TableCell className="hidden lg:table-cell">{teacher.phone}</TableCell>
                                    <TableCell className="hidden md:table-cell">{teacher.email}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default TeacherTable;


