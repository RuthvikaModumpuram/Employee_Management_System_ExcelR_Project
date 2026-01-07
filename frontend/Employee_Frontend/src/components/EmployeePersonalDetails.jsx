import { useState } from "react";
import { addPersonalDetails } from "../services/employeeService";

const EmployeePersonalDetails = () => {
  const [details, setDetails] = useState({
    empId: "",
    dateOfBirth: "",
    gender: "",
    age: "",
    address: ""
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    addPersonalDetails(details)
      .then(() => alert("Personal details added"))
      .catch(() => alert("Error"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Personal Details</h2>

      <input name="empId" placeholder="Employee ID" onChange={handleChange} /><br /><br />
      <input type="date" name="dateOfBirth" placeholder="Date of Birth" onChange={handleChange} /><br /><br />
      <input name="gender" placeholder="Gender" onChange={handleChange} /><br /><br />
      <input name="age" placeholder="Age" onChange={handleChange} /><br /><br />
      <input name="address" placeholder="Address" onChange={handleChange} /><br /><br />

      <button onClick={handleSubmit} className="button-add">Save</button>
    </div>
  );
};

export default EmployeePersonalDetails;
