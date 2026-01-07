import { useEffect, useState } from "react";
import axios from "axios";

const AdminPersonalView = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/admin/personal-details")
      .then(res => setList(res.data))
      .catch(() => alert("Error loading data"));
  }, []);

  if (list.length === 0) return <p>No personal details available</p>;

  return (
    <div>
      <h2> Personal Details</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Emp ID</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {list.map(emp => (
            <tr key={emp.empId}>
              <td>{emp.empId}</td>
              <td>{emp.dateOfBirth}</td>
              <td>{emp.gender}</td>
              <td>{emp.age}</td>
              <td>{emp.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPersonalView;
