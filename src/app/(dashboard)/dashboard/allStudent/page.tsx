"use client";

import React, { useState, useEffect } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, Paper,
} from '@mui/material';
import { BsPersonWorkspace } from 'react-icons/bs'; // Adjust the path if needed
import axiosInstance from '@/lib/axios';

interface Student {
    _id: string;
    email: string;
    username: string;
    role: string;
    status: string;
    photoUrl: string;
    classId: string;
    phoneNumber: string;
    address: string;
    fatherName: string;
    dateOfBirth: string;
    gender: string;
    registeredCourses: string[];
}

interface ApiUserResponse {
    _id: string;
    email: string;
    username: string;
    role: string;
    status: string;
    photoUrl: string;
    classId: string;
    phoneNumber: string;
    address: string;
    fatherName: string;
    dateOfBirth: string;
    gender: string;
    registeredCourses: string[];
}

const StudentTable: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [searchRoll, setSearchRoll] = useState('');
    const [searchName, setSearchName] = useState('');
    const [searchClass, setSearchClass] = useState('');
    const [filteredData, setFilteredData] = useState<Student[]>([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axiosInstance.get<ApiUserResponse[]>('/users');
                // Filter users by role 'student'
                const studentData = response.data.filter((user) => user.role === 'student');
                setStudents(studentData);
                setFilteredData(studentData); // Set initial data
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);

    const handleSearch = () => {
        const filtered = students.filter((student) => {
            const matchesRoll = searchRoll ? student._id.toLowerCase().includes(searchRoll.toLowerCase()) : true;
            const matchesName = searchName ? student.username.toLowerCase().includes(searchName.toLowerCase()) : true;
            const matchesClass = searchClass ? student.classId.toLowerCase() === searchClass.toLowerCase() : true;

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
            <div style={{ overflowX: 'auto' }}>
                <TableContainer component={Paper} sx={{ width: { xs: "86vw", sm: "62vw", md: "70vw", lg: "76vw" }, overflowX: 'auto', margin: '0 auto' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Registration</TableCell>
                                <TableCell>Photo</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell className="hidden md:table-cell">Class</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell className="hidden lg:table-cell">Date Of Birth</TableCell>
                                <TableCell className="hidden lg:table-cell">Phone</TableCell>
                                <TableCell className="hidden md:table-cell">E-mail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredData.map((student, index) => (
                                <TableRow key={index}>
                                    <TableCell>{student._id.slice(-10)}</TableCell>
                                    <TableCell><BsPersonWorkspace size={20} /></TableCell>
                                    <TableCell>{student.username}</TableCell>
                                    <TableCell>{student.gender}</TableCell>
                                    <TableCell className="hidden md:table-cell">{student.classId}</TableCell>
                                    <TableCell>{student.address}</TableCell>
                                    <TableCell className="hidden lg:table-cell">{student.dateOfBirth}</TableCell>
                                    <TableCell className="hidden lg:table-cell">{student.phoneNumber}</TableCell>
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
