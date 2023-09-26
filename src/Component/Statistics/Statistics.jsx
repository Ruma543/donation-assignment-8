import React, { useCallback, useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

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
const Legend = () => {
  return (
    <div className="flex justify-center w-full mx-auto  gap-5 ">
      <div className="flex items-center gap-4">
        <span className="  ">Donation Collect</span>
        <span
          className="h-2 w-10 rounded-lg"
          style={{ backgroundColor: COLORS[0] }}
        ></span>
      </div>
      <div className="flex items-center gap-4">
        <span className="">All Donation Sector</span>
        <span
          className="h-2 w-10 rounded-lg"
          style={{ backgroundColor: COLORS[1] }}
        ></span>
      </div>
    </div>
  );
};
export default function Statistics() {
  const [donationCount, setDonationCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const donateItem = JSON.parse(localStorage.getItem('donation'));
    const donationCount = donateItem ? donateItem.length : 0;

    if (donationCount) {
      const newData = [
        { name: 'Donation Collect', value: donationCount },
        { name: 'All Donation Sector', value: 12 },
      ];
      setData(newData);
      setDonationCount(donationCount);
    }
  }, []);
  return (
    <div className="flex justify-center items-center w-3/5 mx-auto flex-col h-[70vh]">
      {donationCount ? (
        <PieChart width={400} height={400}>
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
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      ) : (
        <h3>No Donation Is Available</h3>
      )}

      <Legend></Legend>
    </div>
  );
}
