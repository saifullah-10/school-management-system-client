"use client";
import React from 'react';
import { FaPeopleGroup } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import CountUp from 'react-countup';

const Status = () => {
    return (
        <div className="flex flex-wrap gap-5 justify-between">
            {/* Students */}
            <div className="max-w-[250px] w-full h-[100px] bg-white rounded-[12px] shadow-lg p-5 flex justify-between">
                <FaPeopleGroup className="text-6xl text-[#3CB878] bg-[#D1F3E0] rounded-full p-2" />
                <div className="text-end">
                    <h1 className="text-slate-500">Students</h1>
                    <p className="text-xl font-bold">
                        <CountUp end={15000} duration={2.5} />
                    </p>
                </div>
            </div>

            {/* Teachers */}
            <div className="max-w-[250px] w-full h-[100px] bg-white rounded-[12px] shadow-lg p-5 flex justify-between">
                <MdGroups className="text-6xl text-[#3F7AFC] bg-[#E1F1FF] rounded-full p-2" />
                <div className="text-end">
                    <h1 className="text-slate-500">Teachers</h1>
                    <p className="text-xl font-bold">
                        <CountUp end={310} duration={2} />
                    </p>
                </div>
            </div>

            {/* Expenses */}
            <div className="max-w-[250px] w-full h-[100px] bg-white rounded-[12px] shadow-lg p-5 flex justify-between">
                <MdGroups className="text-6xl text-[#3F7AFC] bg-[#E1F1FF] rounded-full p-2" />
                <div className="text-end">
                    <h1 className="text-slate-500">Expenses</h1>
                    <p className="text-xl font-bold">
                        <CountUp end={360} prefix="$" duration={2} />
                    </p>
                </div>
            </div>

            {/* Earnings */}
            <div className="max-w-[250px] w-full h-[100px] bg-white rounded-[12px] shadow-lg p-5 flex justify-between">
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
    );
};

export default Status;
