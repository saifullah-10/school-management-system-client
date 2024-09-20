"use client";
import React, { useEffect, useState } from 'react';

import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, Paper,
} from '@mui/material';
import axiosInstance from '@/lib/axios';
import Preloader from '@/components/animation/preloader/Preloader';

interface Course {
    _id: string;
    course_name: string;
    category: string;
    instructor: string;
    credit_hours: string;
    enrollment: number;
    price: string;
}

const Courses: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [filteredData, setFilteredData] = useState<Course[]>([]); // Initialize as an empty array
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchName, setSearchName] = useState<string>('');

    // Fetch data from the API route
    const fetchCourses = async () => {
        try {
            const response = await axiosInstance.get<Course[]>('/courses');
            setCourses(response.data);
            setFilteredData(response.data); // Initialize filtered data with all courses
        } catch (error) {
            setError('Failed to fetch courses.');
        } finally {
            setLoading(false);
        }
    };

    // UseEffect to trigger the fetch on component mount
    useEffect(() => {
        fetchCourses();
    }, []);

    // Conditional rendering based on the state
    if (loading) {
        return <p><Preloader/></p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    // Handle search logic
    const handleSearch = () => {
        const filtered = courses.filter((course) => {
            return searchName ? course.course_name.toLowerCase().includes(searchName.toLowerCase()) : true;
        });
        setFilteredData(filtered);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">All Courses Data</h1>

            {/* Search fields */}
            <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 mb-4">
                <TextField
                    label="Search by Course Name"
                    variant="outlined"
                    size="small"
                    className="w-full sm:w-1/3"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
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
                            setSearchName('');
                            setFilteredData(courses); // Reset to all courses
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
                                <TableCell sx={{ fontWeight: 'bold' , fontSize: '18px'}}>Course Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' , fontSize: '18px'}}>Category</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' , fontSize: '18px'}}>Instructor</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' , fontSize: '18px'}}>Price</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' , fontSize: '18px'}}>Credit Hours</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' , fontSize: '18px'}}>Enrollment</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredData.map((course, index) => (
                                <TableRow key={index}>
                                    <TableCell>{course.course_name}</TableCell>
                                    <TableCell>{course.category}</TableCell>
                                    <TableCell>{course.instructor}</TableCell>
                                    <TableCell>$ {course.price}</TableCell>
                                    <TableCell>{course.credit_hours}</TableCell>
                                    <TableCell>{course.enrollment}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default Courses;
