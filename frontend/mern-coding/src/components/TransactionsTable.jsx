// components/TransactionsTable.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const TransactionsTable = ({ selectedMonth }) => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const fetchTransactions = async () => {
    const res = await axios.get(`http://localhost:5000/api/transactions`, {
      params: { month: selectedMonth, search, page }
    });
    setTransactions(res.data);
  };

  useEffect(() => {
    setPage(1); // reset to page 1 on month change
    fetchTransactions();
  }, [selectedMonth]);

  useEffect(() => {
    fetchTransactions();
  }, [page, search]);

  return (
    <div className="mb-6">
      <h2 className="font-semibold mb-2">Transactions</h2>
      <input
        type="text"
        placeholder="Search by title/desc/price"
        className="mb-2 border px-2 py-1 mr-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Sold</th>
            <th className="p-2 border">Date of Sale</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(tx => (
            <tr key={tx.id}>
              <td className="p-2 border">{tx.id}</td>
              <td className="p-2 border">{tx.title}</td>
              <td className="p-2 border">₹{tx.price}</td>
              <td className="p-2 border">{tx.category}</td>
              <td className="p-2 border">{tx.sold ? "Yes" : "No"}</td>
              <td className="p-2 border">{new Date(tx.dateOfSale).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-2 flex gap-2">
        <button onClick={() => setPage(p => Math.max(p - 1, 1))} className="bg-blue-500 text-white px-3 py-1 rounded">Previous</button>
        <button onClick={() => setPage(p => p + 1)} className="bg-blue-500 text-white px-3 py-1 rounded">Next</button>
      </div>
    </div>
  );
};

export default TransactionsTable;
