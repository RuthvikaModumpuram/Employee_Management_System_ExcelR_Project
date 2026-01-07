import { useEffect, useState } from "react";
import { getFinanceDetails } from "../services/employeeService";
import { getEmpIdFromToken } from "../utils/auth";

const EmployeeFinanceView = () => {
  const [details, setDetails] = useState(null);

  
  const empId = getEmpIdFromToken();

  useEffect(() => {
    if(!empId) return;

    getFinanceDetails(empId)
      .then((res) => setDetails(res.data))
      .catch(() => alert("Error loading finance details"));
  }, [empId]);

  if (!details) return <p>No details available</p>;


  return (
  <div style={{ padding: "20px" }}>
    <h2>Finance Details</h2>
    <table className="employee-table">
      <thead>
        <tr>
          <th>PAN Card</th>
          <th>Aadhar Card</th>
          <th>Bank Name</th>
          <th>Branch</th>
          <th>IFSC Code</th>
          <th>CTC Breakup</th>
        </tr>
      </thead>
      <tbody>
        <tr>
    <td>{details.panCard}</td>
    <td>{details.aadharCard}</td>
    <td>{details.bankName}</td>
    <td>{details.branch}</td>
    <td>{details.ifscCode}</td>
    <td>{details.ctcBreakup}</td>
  </tr>
      </tbody>
    </table>
  </div>
);
};

export default EmployeeFinanceView;
