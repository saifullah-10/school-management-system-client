import Linear from '@/components/animation/courses/Linear';
import LinearWave from '@/components/animation/courses/LinearWave';
import Rotate from '@/components/animation/courses/Rotate';
import RotateFast from '@/components/animation/courses/RotateFast';
import { BsPersonSquare } from "react-icons/bs";
import Link from 'next/link';
import React from 'react';
import { IoBookmarkOutline } from 'react-icons/io5';
import { RiShareForwardLine } from "react-icons/ri";
import { PiChalkboardTeacherFill } from 'react-icons/pi';
import { IoIosPeople } from 'react-icons/io';
import { MdLibraryBooks, MdOutlineAccessTime } from 'react-icons/md';
import Image from 'next/image';

interface Params {
    id: string;
}

const CourseDetailspage = ({ params }: { params: Params }) => {
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
                    <p>{params.id}</p>
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
                        <h1 className="text-4xl font-bold mb-4">IT Statistics Data Science And Business Analysis</h1>
                        <div className='md:flex justify-between'>
                            <div className='text-gray-500 flex gap-2 items-center'>
                                <BsPersonSquare />
                                <p>by <span className='text-black font-Montserrat font-semibold'>Admin</span> </p>
                                <p>categories <span className='text-black font-Montserrat font-semibold'>Data Analysis</span> </p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <button> <IoBookmarkOutline /> </button>
                                <p>Whishlist</p>
                                <RiShareForwardLine />
                                <p>Share</p>
                            </div>
                        </div>

                        <div className='bg-[#7768e5] text-white w-fit p-3 my-5 rounded-[5px]'>
                            Course Info
                        </div>
                        <p className="text-lg font-medium mb-2">Course Overview</p>
                        <p className="text-base font-light mb-4">
                            IT Statistics Data Science And Business Analysis is a comprehensive course designed to equip you with the essential skills and knowledge required to excel in the fields of data science, statistics, and business analysis.
                        </p>
                        <p className="text-lg font-medium mb-2">Course Objectives</p>
                        <ul className="list-disc list-inside text-base font-light mb-4">
                            <li>Understand and apply fundamental statistical concepts.</li>
                            <li>Perform data analysis using various statistical tools and techniques.</li>
                            <li>Utilize data science methodologies to extract insights from data.</li>
                            <li>Implement business analysis strategies to inform decision-making.</li>
                            <li>Develop and interpret data visualizations to communicate findings effectively.</li>
                        </ul>
                        <p className="text-lg font-medium mb-2">Course Modules</p>
                        <ul className="list-decimal list-inside text-base font-light mb-4">
                            <li>Introduction to Statistics</li>
                            <li>Data Collection and Cleaning</li>
                            <li>Exploratory Data Analysis (EDA)</li>
                            <li>Inferential Statistics</li>
                            <li>Regression Analysis</li>
                            <li>Data Science Fundamentals</li>
                            <li>Business Analysis Techniques</li>
                            <li>Capstone Project</li>
                        </ul>
                    </div>
                </div>

                <div
                    className="bg-[#7151e61d] w-[360px] sm:w-[488px] mx-auto my-4"
                >

                    <div className="p-4 mx-auto my-auto">
                        <Image
                            src="/assets/images/course-2-2.jpg"
                            alt="Course image"
                            width="360"
                            height="255"/>

                    </div>
                    {/* card body */}
                    <div className="p-8 mx-auto">
                        {/* title  */}
                        <h2 className="text-lg font-semibold  font-Montserrat">Course : <span className='text-[#704fe6]'>Data Science And Analysis</span> </h2>

                        {/* tag line */}

                        <p className="text-lg font-Montserrat font-semibold my-4">Inspiring Creativity, Shaping Tomorrow by crafting Visionaries in Art and Design.</p>

                        {/* card actions */}

                        <div className="space-y-5 text-lg w-80 my-8 rounded-sm">
                            <div className="flex items-center gap-3"><MdLibraryBooks /> Lessons 6</div>
                            <div className="flex items-center gap-3"> <MdOutlineAccessTime /> 3h Credit</div>
                            <div className="flex items-center gap-3"> <IoIosPeople /> 100</div>
                        </div>

                        <div className="my-3">
                            <div className="flex items-center text-xl font-bold">
                                <PiChalkboardTeacherFill /> Instructor : Prof. Benjamin
                            </div>
                            <p className=" text-[#7151e6] font-Montserrat font-bold my-2">$ 114.99 </p>
                        </div>

                        <div>
                            <button className="w-full text-white btn bg-[#704fe6] group-hover:bg-white group-hover:text-black py-2 px-5 transform transition-transform  hover:scale-110 border-2 border-[#704FE6] font-semibold hover:bg-[#704FE6] hover:text-white ">Register course
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailspage;