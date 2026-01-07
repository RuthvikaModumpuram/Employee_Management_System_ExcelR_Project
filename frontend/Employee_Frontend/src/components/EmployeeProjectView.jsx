import { useEffect, useState } from "react";
import { getProjectDetails } from "../services/employeeService";
import { getEmpIdFromToken } from "../utils/auth";

const EmployeeProjectView = () => {
  const [details, setDetails] = useState(null);

  
  const empId = getEmpIdFromToken();

  useEffect(() => {
    if(!empId) return;
    getProjectDetails(empId)
      .then((res) => setDetails(res.data))
      .catch(() => alert("Error loading project details"));
  }, [empId]);

  if (!details) return <p>No details available</p>;

  return (
  <div style={{ padding: "20px" }}>
    <h2>Project Details</h2>
    <table className="employee-table">
      <thead>
        <tr>
          <th>Project Code</th>
          <th>Client Name</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Reporting Manager</th>
        </tr>
      </thead>
      <tbody>
       <tr>
    <td>{details.projectCode}</td>
    <td>{details.clientName}</td>
    <td>{details.startDate}</td>
    <td>{details.endDate}</td>
    <td>{details.reportingManager}</td>
  </tr>
      </tbody>
    </table>
  </div>
);
};

export default EmployeeProjectView;
