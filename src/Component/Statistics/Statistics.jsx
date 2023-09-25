import React, { useCallback, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const donateItem = JSON.parse(localStorage.getItem('donation'));
// console.log(donateItem);
const donationCount = donateItem ? donateItem.length : 0;
const data = [
  { name: 'Donation Collect', value: donationCount },
  { name: 'All Donation Sector', value: 12 },
];
const COLORS = ['#0088FE', '#00C49F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function Statistics() {
  return (
    <div className="flex justify-center items-center">
      {/* <h3>{donateItem.length}</h3> */}
      <PieChart width={600} height={600}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}
