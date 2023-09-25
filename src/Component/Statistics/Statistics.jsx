import { PieChart, Pie, ResponsiveContainer } from 'recharts';
const Statistics = () => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#79c23fb3"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

// import * as React from 'react';
// import { DefaultizedPieValueType } from '@mui/x-charts';
// import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

// const data = [
//   { label: 'Group A', value: 400, color: '#0088FE' },
//   { label: 'Group B', value: 300, color: '#00C49F' },
//   { label: 'Group C', value: 300, color: '#FFBB28' },
//   { label: 'Group D', value: 200, color: '#FF8042' },
// ];

// const sizing = {
//   margin: { right: 5 },
//   width: 200,
//   height: 200,
//   legend: { hidden: true },
// };
// const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

// const getArcLabel = (params: DefaultizedPieValueType) => {
//   const percent = params.value / TOTAL;
//   return `${(percent * 100).toFixed(0)}%`;
// };

// export default function Statistics() {
//   return (
//     <PieChart
//       series={[
//         {
//           outerRadius: 80,
//           data,
//           arcLabel: getArcLabel,
//         },
//       ]}
//       sx={{
//         [`& .${pieArcLabelClasses.root}`]: {
//           fill: 'white',
//           fontSize: 14,
//         },
//       }}
//       {...sizing}
//     />
//   );
// }

export default Statistics;
