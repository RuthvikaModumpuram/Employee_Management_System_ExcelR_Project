import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeePersonalView from "./EmployeePersonalView";
import EmployeeProfessionalView from "./EmployeeProfessionalView";
import EmployeeFinanceView from "./EmployeeFinanceView";
import EmployeeProjectView from "./EmployeeProjectView";

import "../App.css";

const EmployeeDashboard = () => {
  const [activeView, setActiveView] = useState("personal");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const renderContent = () => {
    switch (activeView) {
      case "personal":
        return <EmployeePersonalView />;
      case "professional":
        return <EmployeeProfessionalView />;
      case "finance":
        return <EmployeeFinanceView />;
      case "project":
        return <EmployeeProjectView />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h3>EMPLOYEE DASHBOARD</h3>

        <button onClick={() => setActiveView("personal")}>
          Personal Details
        </button>
        <button onClick={() => setActiveView("professional")}>
          Professional Details
        </button>
        <button onClick={() => setActiveView("finance")}>
          Finance Details
        </button>
        <button onClick={() => setActiveView("project")}>
          Project Details
        </button>
        
      </div>

      <div className="content-area">
        <h1>EMPLOYEE DETAILS:</h1>
        <div className="form-card">{renderContent()}</div>
      </div>
      <button className="logout-btn" onClick={logout}>
          Logout
        </button>
    </div>
  );
};

export default EmployeeDashboard;
