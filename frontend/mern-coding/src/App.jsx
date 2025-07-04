// App.jsx
import React, { useState } from "react";
import MonthDropdown from "./components/MonthDropdown";
import Statistics from "./components/Statistics";
import TransactionsTable from "./components/TransactionsTable";
import BarChartComp from "./components/BarChartComp";
import PieChartComp from "./components/PieChartComp";

export default function App() {
  const [selectedMonth, setSelectedMonth] = useState("March");

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">📊 Dashboard</h1>
      <MonthDropdown selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
      <Statistics selectedMonth={selectedMonth} />
      <TransactionsTable selectedMonth={selectedMonth} />
      <BarChartComp selectedMonth={selectedMonth} />
      <PieChartComp selectedMonth={selectedMonth} />
    </div>
  );
}
