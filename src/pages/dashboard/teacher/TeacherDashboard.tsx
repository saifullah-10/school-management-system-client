"use client";
import React from 'react';
import { FaPeopleGroup } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import CountUp from 'react-countup';
import NoticeBoard from '@/components/dashboard/adminPath/NoticeBoard';

const TeacherDashboard = () => {
    return (
        <div>
            <h1 className="text-2xl border-2 border-black py-2 my-5 text-center font-bold">Teacher Dashboard</h1>
            <div className='flex flex-col lg:flex-row gap-5 justify-between'>
                <div className="flex flex-wrap gap-2 justify-between ">
                    {/* Students */}
                    <div className="w-full h-[100px] bg-white rounded-[12px] shadow-lg p-5 flex justify-between">
                        <FaPeopleGroup className="text-6xl text-[#3CB878] bg-[#D1F3E0] rounded-full p-2" />
                        <div className="text-end">
                            <h1 className="text-slate-500">Students</h1>
                            <p className="text-xl font-bold">
                                <CountUp end={15000} duration={2.5} />
                            </p>
                        </div>
                    </div>

                    {/* Teachers */}
                    <div className="w-full md:max-w-[48%] h-[100px] bg-white rounded-[12px] shadow-lg p-5 flex justify-between">
                        <MdGroups className="text-6xl text-[#3F7AFC] bg-[#E1F1FF] rounded-full p-2" />
                        <div className="text-end">
                            <h1 className="text-slate-500">Teachers</h1>
                            <p className="text-xl font-bold">
                                <CountUp end={310} duration={2} />
                            </p>
                        </div>
                    </div>

                    {/* Expenses */}
                    <div className="w-full md:max-w-[48%] h-[100px] bg-white rounded-[12px] shadow-lg p-5 flex justify-between">
                        <MdGroups className="text-6xl text-[#3F7AFC] bg-[#E1F1FF] rounded-full p-2" />
                        <div className="text-end">
                            <h1 className="text-slate-500">Expenses</h1>
                            <p className="text-xl font-bold">
                                <CountUp end={360} prefix="$" duration={2} />
                            </p>
                        </div>
                    </div>

                    {/* Earnings */}
                    <div className="w-full h-[100px] bg-white rounded-[12px] shadow-lg p-5 flex justify-between">
                        <div className="text-[#FF0000] bg-[#FFEAEA] rounded-full p-2">
                            <FaMoneyBillAlt className="text-5xl" />
                        </div>
                        <div className="text-end">
                            <h1 className="text-slate-500">Earnings</h1>
                            <p className="text-xl font-bold">
                                <CountUp end={193600} prefix="$" duration={3} />
                            </p>
                        </div>
                    </div>
                </div>
                <NoticeBoard></NoticeBoard>
            </div>
        </div>
    );
};

export default TeacherDashboard;