import React from 'react';

type MetricsCardProps = {
    title: string;
    value: string;
    change: string;
    changeType: 'increase' | 'decrease';
};


const MetricsCard = ({ title, value, change, changeType }: MetricsCardProps) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
        <p className={`text-sm ${changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
          {changeType === 'increase' ? '▲' : '▼'} {change}
        </p>
      </div>
    );
  };

export default MetricsCard;
