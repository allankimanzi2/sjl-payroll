import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const sampleReports = [
  { id: 1, name: "John Doe", trips: 12, earnings: 2400 },
  { id: 2, name: "Jane Smith", trips: 15, earnings: 3000 },
  { id: 3, name: "Mike Johnson", trips: 10, earnings: 2000 },
];

export default function Reports() {
  const [search, setSearch] = useState("");
  const filteredReports = sampleReports.filter((r) => r.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Payroll Reports</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      <table className="w-full bg-white rounded shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Employee</th>
            <th className="p-2">Trips</th>
            <th className="p-2">Earnings ($)</th>
          </tr>
        </thead>
        <tbody>
          {filteredReports.map((report) => (
            <tr key={report.id} className="border-t">
              <td className="p-2">{report.name}</td>
              <td className="p-2 text-center">{report.trips}</td>
              <td className="p-2 text-center">{report.earnings}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-xl font-bold mt-6">Earnings Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={filteredReports}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="earnings" fill="#4CAF50" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
