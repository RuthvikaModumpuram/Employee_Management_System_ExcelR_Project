import { useState } from "react";
import {
  getPersonalDetails,
  updatePersonalDetails
} from "../services/employeeService";

const UpdatePersonalDetails = () => {
  const [empId, setEmpId] = useState("");
  const [details, setDetails] = useState(null);

  // Fetch existing details
  const fetchDetails = () => {
    if (!empId) {
      alert("Enter Employee ID");
      return;
    }

    getPersonalDetails(empId)
      .then((res) => {
        if (res.data) {
          setDetails(res.data);
        } else {
          alert("Details not found");
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
    updatePersonalDetails(details)
      .then(() => alert("Personal details updated"))
      .catch(() => alert("Update failed"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Update Personal Details</h2>

      <input
        placeholder="Employee ID"
        value={empId}
        onChange={(e) => setEmpId(e.target.value)}
      />
      <button onClick={fetchDetails}>Fetch</button><br /><br />

      {details && (
        <>
          <input
            type="date"
            name="dateOfBirth"
            value={details.dateOfBirth}
            onChange={handleChange}
          /><br /><br />
          <input
            name="gender"
            value={details.gender}
            onChange={handleChange}
          /><br /><br />
          <input
            name="age"
            value={details.age}
            onChange={handleChange}
          /><br /><br />
          <input
            name="address"
            value={details.address}
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

export default UpdatePersonalDetails;
