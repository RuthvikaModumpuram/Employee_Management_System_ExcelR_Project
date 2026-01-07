import { useState } from "react";
import {
  getProfessionalDetails,
  updateProfessionalDetails
} from "../services/employeeService";

const UpdateProfessionalDetails = () => {
  const [empId, setEmpId] = useState("");
  const [details, setDetails] = useState(null);

  const fetchDetails = () => {
    if (!empId) {
      alert("Enter Employee ID");
      return;
    }

    getProfessionalDetails(empId)
      .then((res) => {
        if (res.data) {
          setDetails(res.data);
        } else {
          alert("Professional details not found");
        }
      })
      .catch(() => alert("Error fetching details"));
  };

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = () => {
    updateProfessionalDetails(details)
      .then(() => alert("Professional details updated"))
      .catch(() => alert("Update failed"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Update Professional Details</h2>

      <input
        placeholder="Employee ID"
        value={empId}
        onChange={(e) => setEmpId(e.target.value)}
      />
      <button onClick={fetchDetails}>Fetch</button><br /><br />

      {details && (
        <>
          <input
            name="officePhone"
            value={details.officePhone}
            onChange={handleChange}
          /><br /><br />
          <input
            name="officeCity"
            value={details.officeCity}
            onChange={handleChange}
          /><br /><br />
          <input
            name="reportingManager"
            value={details.reportingManager}
            onChange={handleChange}
          /><br /><br />
          <input
            name="hrName"
            value={details.hrName}
            onChange={handleChange}
          /><br /><br />

          <button className="button-update" onClick={handleUpdate}>
            Update
          </button>
        </>
      )}
    </div>
  );
};

export default UpdateProfessionalDetails;
