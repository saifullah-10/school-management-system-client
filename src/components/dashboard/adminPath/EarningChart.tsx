'use client'; // Ensures client-side rendering in Next.js

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data
const data = [
    { month: 'January', earnings: 4000, expenses: 2400 },
    { month: 'February', earnings: 3000, expenses: 1398 },
    { month: 'March', earnings: 5000, expenses: 2200 },
    { month: 'April', earnings: 4700, expenses: 3200 },
    { month: 'May', earnings: 6000, expenses: 3800 },
    { month: 'June', earnings: 5500, expenses: 4100 },
    { month: 'July', earnings: 7000, expenses: 4500 },
];

const EarningChart: React.FC = () => {
    return (
        <div>
            <div className="mb-5">
                <h1 className="text-2xl font-semibold">Earnings</h1>
                <div className="flex gap-7 mt-2">
                    <div>
                        <h1 className="flex items-center gap-2"><div className="w-4 h-4 bg-[#4CAF50]  rounded-full"></div> Total Earnings</h1>
                        <p className="text-right font-semibold">$51000</p>
                    </div>
                    <div className="border-r border-gray-300 "></div>
                    <div>
                        <h1 className="flex items-center gap-2"><div className="w-4 h-4 bg-[#F44336]  rounded-full"></div> Total Expenses</h1>
                        <p className="text-right font-semibold">$21000</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="earnings"
                            stackId="1"
                            stroke="#4CAF50"
                            fill="#4CAF50"
                            fillOpacity={0.8}
                        />
                        <Area
                            type="monotone"
                            dataKey="expenses"
                            stackId="1"
                            stroke="#F44336"
                            fill="#F44336"
                            fillOpacity={0.8}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default EarningChart;
