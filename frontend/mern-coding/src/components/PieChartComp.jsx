// components/PieChartComp.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#0088FE", "#FFBB28", "#00C49F"];

const PieChartComp = ({ selectedMonth }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/pie-chart?month=${selectedMonth}`)
      .then(res => setData(res.data));
  }, [selectedMonth]);

  return (
    <div className="mb-6">
      <h2 className="font-semibold mb-2">Category Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComp;
