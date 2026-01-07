import { useEffect, useState } from "react";
import { getAllEmployees } from "../services/employeeService";

const ViewEmployees = ({ refresh }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees()
      .then((res) => setEmployees(res.data))
      .catch(() => alert("Error fetching employees"));
  }, [refresh]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee List</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Joining Date</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.empId}>
              <td>{emp.empId}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
              <td>{emp.joiningDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewEmployees;
