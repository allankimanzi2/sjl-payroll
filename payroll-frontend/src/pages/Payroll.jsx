import React, { useState, useEffect } from "react";
import axios from "axios";

const Payroll = () => {
  const [payrolls, setPayrolls] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/payroll")
      .then(response => setPayrolls(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Payroll Records</h2>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Truck ID</th>
            <th>Total Trips</th>
            <th>Net Salary</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {payrolls.map(payroll => (
            <tr key={payroll._id}>
              <td>{payroll.employee_id}</td>
              <td>{payroll.truck_id}</td>
              <td>{payroll.total_trips}</td>
              <td>${payroll.net_salary}</td>
              <td>{payroll.payment_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payroll;
