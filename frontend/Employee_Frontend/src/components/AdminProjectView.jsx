import { useEffect, useState } from "react";
import axios from "axios";

const AdminProjectView = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/admin/project-details")
      .then(res => setList(res.data))
      .catch(() => alert("Error"));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
    <h2>Project Details</h2>
    <table className="employee-table">
      <thead>
        <tr>
          <th>Emp ID</th>
          <th>Project Code</th>
          <th>Client Name</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Reporting Manager</th>
        </tr>
      </thead>
      <tbody>
        {list.map(emp => (
          <tr key={emp.empId}>
            <td>{emp.empId}</td>
            <td>{emp.projectCode}</td>
            <td>{emp.clientName}</td>
            <td>{emp.startDate}</td>
            <td>{emp.endDate}</td>
            <td>{emp.reportingManager}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};
export default AdminProjectView;