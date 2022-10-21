import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: '1', نفر: 53, pv: 2400, amt: 2400 },
  { name: '2', نفر: 52, pv: 2400, amt: 2400 },
  { name: '3', نفر: 43, pv: 2400, amt: 2400 },
  { name: '4', نفر: 39, pv: 2400, amt: 2400 },
  { name: '5', نفر: 41, pv: 2400, amt: 2400 },
  { name: '6', نفر: 40, pv: 2400, amt: 2400 },
  { name: '7', نفر: 37, pv: 2400, amt: 2400 },
  { name: '8', نفر: 36, pv: 2400, amt: 2400 },
  { name: '9', نفر: 45, pv: 2400, amt: 2400 },
  { name: '10', نفر: 41, pv: 2400, amt: 2400 },
  { name: '11', نفر: 57, pv: 2400, amt: 2400 },
  { name: '12', نفر: 53, pv: 2400, amt: 2400 },
];

const BarchartShift = () => {
  return (
    <BarChart width={600} height={250} data={data}>
      <XAxis dataKey='name' stroke='#38761D' />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke='#ccc' strokeDasharray='6 6' />
      <Bar dataKey='نفر' fill='#38761D' barSize={20} />
    </BarChart>
  );
};

export default BarchartShift;
