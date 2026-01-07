import { useEffect, useState } from "react";
import { getProfessionalDetails } from "../services/employeeService";
import { getEmpIdFromToken } from "../utils/auth";

const EmployeeProfessionalView = () => {
  const [details, setDetails] = useState(null);

  const empId = getEmpIdFromToken();
  

  useEffect(() => {
    if(!empId) return;

    getProfessionalDetails(empId)
      .then((res) => setDetails(res.data))
      .catch(() => alert("Error loading professional details"));
  }, [empId]);

  if (!details) return <p>No details available</p>;


  return (
  <div style={{ padding: "20px" }}>
    <h2>Professional Details</h2>
    <table className="employee-table">
      <thead>
        <tr>
          <th>Office Phone</th>
          <th>Office City</th>
          <th>Reporting Manager</th>
          <th>HR Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
    <td>{details.officePhone}</td>
    <td>{details.officeCity}</td>
    <td>{details.reportingManager}</td>
    <td>{details.hrName}</td>
  </tr>
      </tbody>
    </table>
  </div>
);
};

export default EmployeeProfessionalView;
