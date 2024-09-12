"use client";
import React from 'react';
import { FaBook, FaClipboardCheck, FaChartBar } from "react-icons/fa";
import CountUp from 'react-countup';
import NoticeBoard from '@/components/dashboard/adminPath/NoticeBoard';

const StudentDashboard = () => {
    return (
        <div>
            <h1 className="text-2xl border-2 border-black py-2 my-5 text-center font-bold">Student Dashboard</h1>
            <div className='flex flex-col lg:flex-row gap-5 justify-between'>
                <div className="flex flex-wrap gap-2 justify-between ">

                    {/* Total Classes */}
                    <div className="w-full h-[100px] bg-white rounded-[12px] shadow-lg p-5 flex justify-between">
                        <FaBook className="text-6xl text-[#3CB878] bg-[#D1F3E0] rounded-xl p-2" />
                        <div className="text-end">
                            <h1 className="text-slate-500">Total Classes</h1>
                            <p className="text-xl font-bold">
                                <CountUp end={50} duration={2.5} />
                            </p>
                        </div>
                    </div>

                    {/* Attendance */}
                    <div className="w-full md:max-w-[48%] h-[100px] bg-white rounded-[12px] shadow-lg p-5 flex justify-between">
                        <FaClipboardCheck className="text-6xl text-[#3F7AFC] bg-[#E1F1FF] rounded-xl p-2" />
                        <div className="text-end">
                            <h1 className="text-slate-500">Attendance</h1>
                            <p className="text-xl font-bold">
                                <CountUp end={95} suffix="%" duration={2} />
                            </p>
                        </div>
                    </div>

                    {/* Assignments */}
                    <div className="w-full md:max-w-[48%] h-[100px] bg-white rounded-[12px] shadow-lg p-5 flex justify-between">
                        <FaClipboardCheck className="text-6xl text-[#FF6F61] bg-[#FFEAEA] rounded-xl p-2" />
                        <div className="text-end">
                            <h1 className="text-slate-500">Assignments</h1>
                            <p className="text-xl font-bold">
                                <CountUp end={12} duration={2} />
                            </p>
                        </div>
                    </div>

                    {/* Grades */}
                    <div className="w-full h-[100px] bg-white rounded-[12px] shadow-lg p-5 flex justify-between">
                        <FaChartBar className="text-6xl text-[#FFB400] bg-[#FFF5E0] rounded-xl p-2" />
                        <div className="text-end">
                            <h1 className="text-slate-500">Grades</h1>
                            <p className="text-xl font-bold">
                                <CountUp end={85} suffix="%" duration={3} />
                            </p>
                        </div>
                    </div>
                </div>

                {/* Notice Board */}
                <div className="bg-white w-full lg:w-[30%] h-auto lg:h-[400px] rounded-xl shadow-lg p-4 flex-shrink-0">
                    <NoticeBoard />
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
