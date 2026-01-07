import { useEffect, useState } from "react";
import { getPersonalDetails } from "../services/employeeService";
import { getEmpIdFromToken } from "../utils/auth";

const EmployeePersonalView = () => {
  const [details, setDetails] = useState(null);

  
  const empId = getEmpIdFromToken();

  useEffect(() => {
    if(!empId) return;

    getPersonalDetails(empId)
      .then((res) => setDetails(res.data))
      .catch(() => alert("Error loading personal details"));
  }, [empId]);

  if (!details) return <p>No details available</p>;


  return (
    <div style={{ padding: "20px" }}>
      <h2>Personal Details</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Date of Birth:</th>
            <th>Gender:</th>
            <th>Age:</th>
            <th>Address:</th>
            </tr>
            </thead>
            <tbody>
              
                 <tr>
                     <td>{details.dateOfBirth}</td>
                     <td>{details.gender}</td>
                     <td>{details.age}</td>
                     <td>{details.address}</td>
                </tr>
              
            </tbody>
            </table>
    </div>
  );
};

export default EmployeePersonalView;
