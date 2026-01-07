import { useState } from "react";
import { addProfessionalDetails } from "../services/employeeService";

const EmployeeProfessionalDetails = () => {
  const [details, setDetails] = useState({
    empId: "",
    officePhone: "",
    officeCity: "",
    reportingManager: "",
    hrName: ""
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    addProfessionalDetails(details)
      .then(() => alert("Professional details added"))
      .catch(() => alert("Error adding professional details"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Professional Details</h2>

      <input name="empId" placeholder="Employee ID" onChange={handleChange} /><br /><br />
      <input name="officePhone" placeholder="Office Phone" onChange={handleChange} /><br /><br />
      <input name="officeCity" placeholder="Office City" onChange={handleChange} /><br /><br />
      <input name="reportingManager" placeholder="Reporting Manager" onChange={handleChange} /><br /><br />
      <input name="hrName" placeholder="HR Name" onChange={handleChange} /><br /><br />

      <button onClick={handleSubmit} className="button-add">Save</button>
    </div>
  );
};

export default EmployeeProfessionalDetails;
