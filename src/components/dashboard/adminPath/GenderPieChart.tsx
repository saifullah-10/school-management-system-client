// components/GenderPieChart.tsx

'use client';
import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

// Data for the pie chart
const data = [
  { name: 'Female Students', value: 45000 },
  { name: 'Male Students', value: 105000 },
];

const COLORS = ['#FF69B4', '#1E90FF'];

const GenderPieChart: React.FC = () => {
  return (
    <div className="p-5 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Student Distribution by Gender</h2>
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
    </div>
  );
};

export default GenderPieChart;
