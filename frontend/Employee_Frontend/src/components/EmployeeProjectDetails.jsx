import { useState } from "react";
import { addProjectDetails } from "../services/employeeService";

const EmployeeProjectDetails = () => {

  const [details, setDetails] = useState({
    empId: "",
    projectCode: "",
    startDate: "",
    endDate: "",
    clientName: "",
    reportingManager: ""
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    addProjectDetails(details)
      .then(() => alert("Project details added successfully"))
      .catch(() => alert("Error adding project details"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Project Details</h2>

      <input name="empId" placeholder="Employee ID" onChange={handleChange} /><br /><br />
      <input name="projectCode" placeholder="Project Code" onChange={handleChange} /><br /><br />
      <input type="date" name="startDate" onChange={handleChange} /><br /><br />
      <input type="date" name="endDate" onChange={handleChange} /><br /><br />
      <input name="clientName" placeholder="Client Name" onChange={handleChange} /><br /><br />
      <input name="reportingManager" placeholder="Reporting Manager" onChange={handleChange} /><br /><br />

      <button className="button-add" onClick={handleSubmit}>
        Save Project Details
      </button>
    </div>
  );
};

export default EmployeeProjectDetails;
