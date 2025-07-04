// components/Statistics.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Statistics = ({ selectedMonth }) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await axios.get(`http://localhost:5000/api/statistics?month=${selectedMonth}`);
      setStats(res.data);
    };
    fetchStats();
  }, [selectedMonth]);

  if (!stats) return <p>Loading stats...</p>;

  return (
    <div className="mb-6 p-4 border rounded shadow">
      <h2 className="font-semibold mb-2">Statistics for {selectedMonth}</h2>
      <p>📈 Total Sale Amount: ₹{stats.totalSaleAmount}</p>
      <p>✅ Sold Items: {stats.totalSoldItems}</p>
      <p>❌ Not Sold Items: {stats.totalNotSoldItems}</p>
    </div>
  );
};

export default Statistics;
