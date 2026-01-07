import { useEffect, useState } from "react";
import axios from "axios";
const AdminFinanceView = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/admin/finance-details")
      .then(res => setList(res.data))
      .catch(() => alert("Error"));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
    <h2>Finance Details</h2>
    <table className="employee-table">
        <thead>
        <tr>
          <th>Emp ID</th>
          <th>PAN Card</th>
          <th>Aadhar Card</th>
          <th>Bank Name</th>
          <th>Branch</th>
          <th>IFSC Code</th>
          <th>CTC Breakup</th>
        </tr>
      </thead>
      <tbody>
        {list.map(emp => (
          <tr key={emp.empId}>
            <td>{emp.empId}</td>
            <td>{emp.panCard}</td>
            <td>{emp.aadharCard}</td>
            <td>{emp.bankName}</td>
            <td>{emp.branch}</td>
            <td>{emp.ifscCode}</td>
            <td>{emp.ctcBreakup}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};
export default AdminFinanceView;
