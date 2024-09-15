"use client"

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contextProvider/ContextProvider';
import axiosInstance from '@/lib/axios';
import Link from 'next/link';
import Image from 'next/image';
import Linear from '@/components/animation/courses/Linear';
import LinearWave from '@/components/animation/courses/LinearWave';
import Rotate from '@/components/animation/courses/Rotate';
import RotateFast from '@/components/animation/courses/RotateFast';
import { BsPersonSquare } from 'react-icons/bs';
import { IoBookmarkOutline } from 'react-icons/io5';
import { RiShareForwardLine } from 'react-icons/ri';
import { PiChalkboardTeacherFill } from 'react-icons/pi';
import { IoIosPeople } from 'react-icons/io';
import { MdLibraryBooks, MdOutlineAccessTime } from 'react-icons/md';

interface Course {
    _id: string;
    course_code: string;
    title: string;
    author: string;
    category: string;
    course_info: {
        overview: string;
        objectives: string[];
        modules: string[];
        prerequisites: string;
        duration: string;
        schedule: string;
        format: string;
        language: string;
        certification: string;
    };
    course_image: string;
    course_name: string;
    description: string;
    lessons: number;
    credit_hours: string;
    enrollment: number;
    instructor: string;
    price: string;
}

interface Params {
    id: string;
}

const CourseDetailspage = ({ params }: { params: Params }) => {
    const [course, setCourse] = useState<Course | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [registrationStatus, setRegistrationStatus] = useState<string | null>(null);
    const [isRegistered, setIsRegistered] = useState<boolean>(false);
    const auth = useAuth();
    const user = auth?.user;

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const res = await axiosInstance.get(`/coursesCollection/${params.id}`);
                setCourse(res.data);
            } catch (error) {
                console.error('Failed to fetch course data:', error);
                setError('Error loading course data');
            }
        };

        fetchCourse();
    }, [params.id]);

    useEffect(() => {
        const checkRegistration = () => {
            if (user && course) {
                const isAlreadyRegistered = user.registeredCourses.includes(course.course_code);
                setIsRegistered(isAlreadyRegistered);
            }
        };

        checkRegistration();
    }, [user, course]);

    const handleRegister = async () => {
        if (!user) {
            setRegistrationStatus('You must be logged in to register for a course.');
            return;
        }

        if (isRegistered) {
            setRegistrationStatus('You are already registered for this course.');
            return;
        }

        try {
            await axiosInstance.patch(`/users/${user._id}/courses`, {
                courseId: course?.course_code,
            });
            setRegistrationStatus('Course successfully registered!');
            setIsRegistered(true); // Update state to reflect registration
        } catch (error) {
            console.error('Failed to register course:', error);
            setRegistrationStatus('Error registering course');
        }
    };

    if (error) {
        return <div>{error}</div>;
    }

    if (!course) {
        return <div>Loading...</div>;
    }

    return (
        <div className='font-Poppins'>
            {/* heading */}
            <div className="bg-[url('/assets/images/breadcrumb.jpg')] py-20 relative">
                <h1 className="text-6xl text-center font-Montserrat font-bold">
                    Course
                </h1>
                <div className="flex justify-center font-Poppins font-bold py-4">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <span className="text-[#704fe6] px-2">/</span>
                    <Link href="/courses" className="hover:underline">
                        Courses
                    </Link>
                    <span className="text-[#704fe6] px-2">/</span>
                    <p>{course.title}</p>
                </div>
                <Linear />
                <LinearWave />
                <Rotate />
                <RotateFast />
            </div>

            {/* main */}
            <div className='lg:flex justify-center w-[98%] md:w-11/12 mx-auto'>
                <div>
                    <div className="p-4 md:p-8">
                        <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                        <div className='md:flex justify-between'>
                            <div className='text-gray-500 flex gap-2 items-center'>
                                <BsPersonSquare />
                                <p>by <span className='text-black font-Montserrat font-semibold'>{course.instructor}</span></p>
                                <p>categories <span className='text-black font-Montserrat font-semibold'>{course.category}</span></p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <button> <IoBookmarkOutline /> </button>
                                <p>Wishlist</p>
                                <RiShareForwardLine />
                                <p>Share</p>
                            </div>
                        </div>

                        <div className='bg-[#7768e5] text-white w-fit p-3 my-5 rounded-[5px]'>
                            Course Info
                        </div>
                        <p className="text-lg font-medium mb-2">Course Overview</p>
                        <p className="text-base font-light mb-4">
                            {course.course_info.overview}
                        </p>
                        <p className="text-lg font-medium mb-2">Course Objectives</p>
                        <ul className="list-disc list-inside text-base font-light mb-4">
                            {course.course_info.objectives.map((objective, index) => (
                                <li key={index}>{objective}</li>
                            ))}
                        </ul>
                        <p className="text-lg font-medium mb-2">Course Modules</p>
                        <ul className="list-decimal list-inside text-base font-light mb-4">
                            {course.course_info.modules.map((module, index) => (
                                <li key={index}>{module}</li>
                            ))}
                        </ul>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
                            {/* <!-- Prerequisites --> */}
                            <div className="flex flex-col">
                                <p className="text-lg font-semibold font-Montserrat">Prerequisites</p>
                                <p className="text-base font-light">{course.course_info.prerequisites}</p>
                            </div>
                            {/* <!-- Duration --> */}
                            <div className="flex flex-col">
                                <p className="text-lg font-semibold font-Montserrat">Duration</p>
                                <p className="text-base font-light">{course.course_info.duration}</p>
                            </div>
                            {/* <!-- Schedule --> */}
                            <div className="flex flex-col">
                                <p className="text-lg font-semibold font-Montserrat">Schedule</p>
                                <p className="text-base font-light">{course.course_info.schedule}</p>
                            </div>
                            {/* <!-- Format --> */}
                            <div className="flex flex-col">
                                <p className="text-lg font-semibold font-Montserrat">Format</p>
                                <p className="text-base font-light">{course.course_info.format}</p>
                            </div>
                            {/* <!-- Language --> */}
                            <div className="flex flex-col">
                                <p className="text-lg font-semibold font-Montserrat">Language</p>
                                <p className="text-base font-light">{course.course_info.language}</p>
                            </div>
                            {/* <!-- Certification --> */}
                            <div className="flex flex-col">
                                <p className="text-lg font-semibold font-Montserrat">Certification</p>
                                <p className="text-base font-light">{course.course_info.certification}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#7151e61d] w-[360px] sm:w-[488px] mx-auto my-4">
                    <div className="p-4 mx-auto my-auto">
                        <Image
                            src="/assets/images/course-2-2.jpg"
                            alt="Course image"
                            width={360}
                            height={255}
                        />
                    </div>
                    {/* card body */}
                    <div className="p-8 mx-auto">
                        {/* title */}
                        <h2 className="text-lg font-semibold  font-Montserrat">Course : <span className='text-[#704fe6]'>{course.course_name}</span></h2>

                        {/* tag line */}
                        <p className="text-lg font-Montserrat font-semibold my-4">{course.description}</p>

                        {/* card actions */}
                        <div className="space-y-5 text-lg w-80 my-8 rounded-sm">
                            <div className="flex items-center gap-3"><MdLibraryBooks /> Lessons {course.lessons}</div>
                            <div className="flex items-center gap-3"> <MdOutlineAccessTime /> {course.credit_hours} Credit</div>
                            <div className="flex items-center gap-3"> <IoIosPeople /> {course.enrollment}</div>
                        </div>

                        <div className="my-3">
                            <div className="flex items-center text-xl font-bold">
                                <PiChalkboardTeacherFill /> Instructor : {course.instructor}
                            </div>
                            <p className="text-[#7151e6] font-Montserrat font-bold my-2">{course.price}</p>
                        </div>

                        {
                            (user?.role === 'student') &&
                            <div>
                                <button
                                    className={`w-full text-white btn bg-[#704fe6] py-2 px-5 border-2 border-[#704FE6] font-semibold ${isRegistered ? 'opacity-40 cursor-not-allowed' : 'hover:bg-[#704FE6] hover:text-white transform transition-transform hover:scale-110'}`}
                                    onClick={handleRegister}
                                    disabled={isRegistered}
                                >
                                    {isRegistered? "Already Registered" :"Register course"}
                                </button>
                                {registrationStatus && (
                                    <p className="mt-2 text-center text-lg font-semibold">
                                        {registrationStatus}
                                    </p>
                                )}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailspage;
