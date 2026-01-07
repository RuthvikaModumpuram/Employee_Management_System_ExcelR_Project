import { useEffect, useState } from "react";
import axios from "axios";

const AdminProfessionalView = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/admin/professional-details")
      .then(res => setList(res.data))
      .catch(() => alert("Error"));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
    <h2>Professional Details</h2>
    <table className="employee-table">
        <thead>
        <tr>
          <th>Emp ID</th>
          <th>Office Phone</th>
          <th>Office City</th>
          <th>Reporting Manager</th>
          <th>HR Name</th>
        </tr>
      </thead>
      <tbody>
        {list.map(emp => (
          <tr key={emp.empId}>
            <td>{emp.empId}</td>
            <td>{emp.officePhone}</td>
            <td>{emp.officeCity}</td>
            <td>{emp.reportingManager}</td>
            <td>{emp.hrName}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default AdminProfessionalView;
