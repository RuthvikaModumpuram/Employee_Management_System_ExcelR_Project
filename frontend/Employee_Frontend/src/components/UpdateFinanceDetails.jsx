import { useState } from "react";
import {
  getFinanceDetails,
  updateFinanceDetails
} from "../services/employeeService";

const UpdateFinanceDetails = () => {
  const [empId, setEmpId] = useState("");
  const [details, setDetails] = useState(null);

  const fetchDetails = () => {
    if (!empId) {
      alert("Enter Employee ID");
      return;
    }

    getFinanceDetails(empId)
      .then((res) => {
        if (res.data) {
          setDetails(res.data);
        } else {
          alert("Finance details not found");
        }
      })
      .catch(() => alert("Error fetching finance details"));
  };

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = () => {
    updateFinanceDetails(details)
      .then(() => alert("Finance details updated successfully"))
      .catch(() => alert("Update failed"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Update Finance Details</h2>

      <input
        placeholder="Employee ID"
        value={empId}
        onChange={(e) => setEmpId(e.target.value)}
      />
      <button onClick={fetchDetails}>Fetch</button><br /><br />

      {details && (
        <>
          <input
            name="aadharCard"
            value={details.aadharCard}
            onChange={handleChange}
          /><br /><br />
          <input
            name="panCard"
            value={details.panCard}
            onChange={handleChange}
          /><br /><br />
          <input
            name="bankName"
            value={details.bankName}
            onChange={handleChange}
          /><br /><br />
          <input
            name="branch"
            value={details.branch}
            onChange={handleChange}
          /><br /><br />
          <input
            name="ifscCode"
            value={details.ifscCode}
            onChange={handleChange}
          /><br /><br />
          <input
            name="ctcBreakup"
            value={details.ctcBreakup}
            onChange={handleChange}
          /><br /><br />

          <button className="button-update" onClick={handleUpdate}>
            Update Finance Details
          </button>
        </>
      )}
    </div>
  );
};

export default UpdateFinanceDetails;
