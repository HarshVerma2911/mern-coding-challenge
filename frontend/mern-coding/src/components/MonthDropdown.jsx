// components/MonthDropdown.jsx
import React from "react";

const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const MonthDropdown = ({ selectedMonth, setSelectedMonth }) => {
  return (
    <div className="mb-4">
      <label className="mr-2 font-semibold">Select Month:</label>
      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
        className="border rounded px-3 py-1"
      >
        {months.map((month) => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>
    </div>
  );
};

export default MonthDropdown;
