import { useState } from "react";
import { addFinanceDetails } from "../services/employeeService";

const EmployeeFinanceDetails = () => {

  const [details, setDetails] = useState({
    empId: "",
    aadharCard: "",
    panCard: "",
    bankName: "",
    branch: "",
    ifscCode: "",
    ctcBreakup: ""
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    addFinanceDetails(details)
      .then(() => alert("Finance details added successfully"))
      .catch(() => alert("Error adding finance details"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Finance Details</h2>

      <input name="empId" placeholder="Employee ID" onChange={handleChange} /><br /><br />
      <input name="aadharCard" placeholder="Aadhar Card" onChange={handleChange} /><br /><br />
      <input name="panCard" placeholder="PAN Card" onChange={handleChange} /><br /><br />
      <input name="bankName" placeholder="Bank Name" onChange={handleChange} /><br /><br />
      <input name="branch" placeholder="Branch" onChange={handleChange} /><br /><br />
      <input name="ifscCode" placeholder="IFSC Code" onChange={handleChange} /><br /><br />
      <input name="ctcBreakup" placeholder="CTC Breakup" onChange={handleChange} /><br /><br />

      <button className="button-add" onClick={handleSubmit}>Save Finance Details</button>
    </div>
  );
};

export default EmployeeFinanceDetails;
