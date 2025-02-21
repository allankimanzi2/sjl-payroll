import React, { useState, useEffect } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Dashboard = () => {
  const [payrollData, setPayrollData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/payroll")
      .then(response => setPayrollData(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Payroll Dashboard</h2>
      <BarChart width={600} height={300} data={payrollData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="employee_id" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="net_salary" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Dashboard;
