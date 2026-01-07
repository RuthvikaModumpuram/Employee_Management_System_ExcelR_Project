import { useState } from "react";
import { addEmployee } from "../services/employeeService";

const AddEmployee = ({ onSuccess }) => {
  const [employee, setEmployee] = useState({
    empId: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    salary: "",
    joiningDate: ""
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addEmployee(employee)
      .then(() => {
        alert("Employee added successfully");
        if (onSuccess) onSuccess();
        setEmployee({
          empId: "",
          name: "",
          email: "",
          phone: "",
          department: "",
          salary: "",
          joiningDate: ""
        });
      })
      .catch(() => {
        alert("Error adding employee");
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="empId"
          placeholder="Employee ID"
          value={employee.empId}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={employee.name}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={employee.phone}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="date"
          name="joiningDate"
          placeholder="Joining Date"
          value={employee.joiningDate}
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit" className="button-add">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
