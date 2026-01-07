import { useState } from "react";
import {
  getProjectDetails,
  updateProjectDetails
} from "../services/employeeService";

const UpdateProjectDetails = () => {
  const [empId, setEmpId] = useState("");
  const [details, setDetails] = useState(null);

  const fetchDetails = () => {
    if (!empId) {
      alert("Enter Employee ID");
      return;
    }

    getProjectDetails(empId)
      .then((res) => {
        if (res.data) {
          setDetails(res.data);
        } else {
          alert("Project details not found");
        }
      })
      .catch(() => alert("Error fetching project details"));
  };

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = () => {
    updateProjectDetails(details)
      .then(() => alert("Project details updated successfully"))
      .catch(() => alert("Update failed"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Update Project Details</h2>

      <input
        placeholder="Employee ID"
        value={empId}
        onChange={(e) => setEmpId(e.target.value)}
      />
      <button onClick={fetchDetails}>Fetch</button><br /><br />

      {details && (
        <>
          <input
            name="projectCode"
            value={details.projectCode}
            onChange={handleChange}
          /><br /><br />
          <input
            type="date"
            name="startDate"
            value={details.startDate}
            onChange={handleChange}
          /><br /><br />
          <input
            type="date"
            name="endDate"
            value={details.endDate}
            onChange={handleChange}
          /><br /><br />
          <input
            name="clientName"
            value={details.clientName}
            onChange={handleChange}
          /><br /><br />
          <input
            name="reportingManager"
            value={details.reportingManager}
            onChange={handleChange}
          /><br /><br />

          <button className="button-update" onClick={handleUpdate}>
            Update Project Details
          </button>
        </>
      )}
    </div>
  );
};

export default UpdateProjectDetails;
