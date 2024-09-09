"use client"

// TrafficDashboard.tsx
import React from 'react';

interface TrafficData {
  label: string;
  value: number;
  percentage: number;
  color: string;
}

const trafficData: TrafficData[] = [
  { label: 'Direct', value: 12890, percentage: 50, color: 'bg-green-400' },
  { label: 'Search', value: 7245, percentage: 27, color: 'bg-blue-400' },
  { label: 'Referrals', value: 4256, percentage: 16, color: 'bg-yellow-400' },
  { label: 'Social', value: 500, percentage: 7, color: 'bg-red-400' },
];

const TrafficDashboard: React.FC = () => {
  return (
    <div className="p-4 h-96 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-2">Website Traffic</h2>
      <p className="text-4xl font-bold mb-4">2,590</p>
      
      <div className="flex items-center mb-4">
        <div className="w-full h-2 bg-gray-200 rounded-full flex overflow-hidden my-3">
          {trafficData.map((data) => (
            <div
              key={data.label}
              className={`h-full ${data.color}`}
              style={{ width: `${data.percentage}%` }}
            />
          ))}
        </div>
      </div>

      <ul className="space-y-5">
        {trafficData.map((data) => (
          <li key={data.label} className="flex justify-between items-center">
            <div className="flex items-center">
              <span className={`w-4 h-4 rounded-full ${data.color} mr-2 shadow-xl`}></span>
              <span>{data.label}</span>
            </div>
            <div className="text-right">
              <span className="text-xl font-bold">{data.value.toLocaleString()}</span>
              <span className="text-gray-500 ml-2">{data.percentage}%</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrafficDashboard;
