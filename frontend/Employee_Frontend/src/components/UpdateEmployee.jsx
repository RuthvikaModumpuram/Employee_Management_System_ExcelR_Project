import { useState } from "react";
import {
  getEmployeeById,
  updateEmployee
} from "../services/employeeService";

const UpdateEmployee = ({ onSuccess }) => {
  const [id, setId] = useState("");
  const [employee, setEmployee] = useState({
    empId: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    salary: "",
    joiningDate: ""
  });

  const fetchEmployee = () => {
    getEmployeeById(id)
      .then((res) => {
        if (res.data) {
          setEmployee(res.data);
        } else {
          alert("Employee not found");
        }
      })
      .catch(() => {
        alert("Error fetching employee");
      });
  };

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateEmployee(employee)
      .then(() => {
        alert("Employee updated successfully");
        onSuccess();
      })
      .catch(() => {
        alert("Update failed");
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Update Employee</h2>

      <input
        type="number"
        placeholder="Enter Employee ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button className="button-fetch" onClick={fetchEmployee}>
        Fetch
      </button>

      <br /><br />

      {employee.empId && (
        <form onSubmit={handleUpdate}>
          <input type="number" name="empId" value={employee.empId} disabled /><br /><br />

          <input type="text" name="name" value={employee.name} onChange={handleChange} /><br /><br />
          <input type="email" name="email" value={employee.email} onChange={handleChange} /><br /><br />
          <input type="text" name="phone" value={employee.phone} onChange={handleChange} /><br /><br />
          <input type="text" name="department" value={employee.department} onChange={handleChange} /><br /><br />
          <input type="number" name="salary" value={employee.salary} onChange={handleChange} /><br /><br />
          <input type="date" name="joiningDate" value={employee.joiningDate} onChange={handleChange} /><br /><br />

          <button className="button-update" type="submit">
            Update Employee
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateEmployee;
