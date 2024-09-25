"use client";

import React, { useState, useEffect } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, Paper,
} from '@mui/material';
import { BsPersonWorkspace } from 'react-icons/bs';
import axiosInstance from '@/lib/axios';

interface Teacher {
    _id: string;
    email: string;
    username: string;
    role: string;
    status: string;
    photoUrl: string;
    department: string;
    phoneNumber: string;
    address: string;
    gender: string;
    courses: string;
}

const TeacherTable: React.FC = () => {
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [searchId, setSearchId] = useState('');
    const [searchName, setSearchName] = useState('');
    const [searchClass, setSearchClass] = useState('');
    const [filteredData, setFilteredData] = useState<Teacher[]>([]);

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await axiosInstance.get<Teacher[]>('/users');
                // Filter users by role 'teacher'
                const teacherData = response.data.filter((user) => user.role === 'teacher');
                setTeachers(teacherData);
                setFilteredData(teacherData); // Set initial data
            } catch (error) {
                console.error('Error fetching teachers:', error);
            }
        };

        fetchTeachers();
    }, []);

    const handleSearch = () => {
        const filtered = teachers.filter((teacher) => {
            const matchesId = searchId ? teacher._id.toLowerCase().includes(searchId.toLowerCase()) : true;
            const matchesName = searchName ? teacher.username.toLowerCase().includes(searchName.toLowerCase()) : true;
            const matchesClass = searchClass ? teacher.department === searchClass : true;

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
                                <TableCell>Id</TableCell>
                                <TableCell>Photo</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell className="hidden md:table-cell">Department</TableCell>
                                <TableCell>Courses</TableCell>
                                <TableCell className="hidden md:table-cell">Address</TableCell>
                                <TableCell className="hidden lg:table-cell">Phone</TableCell>
                                <TableCell className="hidden md:table-cell">E-mail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredData.map((teacher, index) => (
                                <TableRow key={index}>
                                    <TableCell>{teacher._id.slice(-10)}</TableCell>
                                    <TableCell><BsPersonWorkspace size={20} /></TableCell>
                                    <TableCell>{teacher.username}</TableCell>
                                    <TableCell>{teacher.gender}</TableCell>
                                    <TableCell className="hidden md:table-cell">{teacher.department}</TableCell>
                                    <TableCell>{teacher.courses}</TableCell>
                                    <TableCell className="hidden md:table-cell">{teacher.address}</TableCell>
                                    <TableCell className="hidden lg:table-cell">{teacher.phoneNumber}</TableCell>
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
