// components/GenderPieChart.tsx

'use client';
import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

// Data for the pie chart
const data = [
    { name: 'Female Students', value: 45000 },
    { name: 'Male Students', value: 105000 },
];

const COLORS = ['#304FFE', '#FFA601'];

const GenderPieChart: React.FC = () => {
    return (
        <div className="flex-1 max-w-[400px] bg-white p-5 rounded-xl shadow-lg mt-5 flex-shrink-0">
            <h1 className='text-2xl font-bold'>Students</h1>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius="80%"
                        innerRadius="50%"
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
            <div className='flex justify-between'>
                <div>
                    <div className='h-3 rounded-full bg-[#304FFE]  mb-2'></div>
                    <h1 className='text-slate-500'>Female Students</h1>
                    <p className='text-end font-semibold text-lg'>4500</p>
                </div>
                <div className="border-r border-gray-300 "></div>
                <div>
                    <div className='h-3 rounded-full bg-[#FFA601]  mb-2'></div>
                    <h1 className='text-slate-500'>Male Students</h1>
                    <p className='text-end font-semibold text-lg'>10500</p>
                </div>
            </div>
        </div>
    );
};

export default GenderPieChart;
