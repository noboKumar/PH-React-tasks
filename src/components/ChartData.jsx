import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const students = [
  { id: 1, name: "Alice", marks: 85 },
  { id: 2, name: "Bob", marks: 72 },
  { id: 3, name: "Charlie", marks: 90 },
  { id: 4, name: "David", marks: 68 },
  { id: 5, name: "Eva", marks: 95 },
];

const ChartData = () => {
  return (
    <div className="mx-auto max-w-2/5">
      <LineChart width={800} height={400} data={students}>
        <Line type="monotone" dataKey="marks" stroke="white"></Line>
        <CartesianGrid stroke="gray" strokeDasharray="5 5"></CartesianGrid>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip contentStyle={{backgroundColor: "black"}} />
      </LineChart>
    </div>
  );
};

export default ChartData;
