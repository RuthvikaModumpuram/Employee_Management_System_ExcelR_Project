import { useState } from "react";
import AddEmployee from './AddEmployee';
import  UpdateEmployee  from "./UpdateEmployee";
import DeleteEmployee from './DeleteEmployee';
import ViewEmployees from './ViewEmployees';
import {useNavigate} from "react-router-dom";
import EmployeePersonalDetails from "./EmployeePersonalDetails";
import EmployeeProfessionalDetails from "./EmployeeProfessionalDetails";
import EmployeeFinanceDetails from "./EmployeeFinanceDetails";
import EmployeeProjectDetails from "./EmployeeProjectDetails";
import UpdatePersonalDetails from "./UpdatePersonalDetails";
import UpdateProfessionalDetails from "./UpdateProfessionalDetails";
import UpdateFinanceDetails from "./UpdateFinanceDetails";
import UpdateProjectDetails from "./UpdateProjectDetails";
import AdminPersonalView from "./AdminPersonalView";

import AdminProfessionalView from "./AdminProfessionalView";
import AdminFinanceView from "./AdminFinanceView";
import AdminProjectView from "./AdminProjectView";



import "../App.css";

const Dashboard =()=>{
    const navigate = useNavigate();
    const [activeView, setActiveView] = useState("view");
    const [refresh, setRefresh]= useState(false);

    const refreshTable =()=>{
        setRefresh(!refresh);
    };

    const logout=()=>{
        localStorage.removeItem("token");
        navigate("/login");
    };
    const renderContent =()=>{
        switch(activeView){
            case "add":
                return <AddEmployee onSuccess={refreshTable}/>;
            case "update":
                return <UpdateEmployee onSuccess={refreshTable}/>;
            case "delete":
                return <DeleteEmployee onSuccess={refreshTable}/>;
            case "personal":
                return <EmployeePersonalDetails />;
            case "professional":
                return <EmployeeProfessionalDetails />;
            case "finance":
                return <EmployeeFinanceDetails />;
            case "project":
                return <EmployeeProjectDetails />;
            case "update-personal":
                return <UpdatePersonalDetails />;
            case "update-professional":
                return <UpdateProfessionalDetails />;
             case "update-finance":
                return <UpdateFinanceDetails />;
            case "update-project":
                return <UpdateProjectDetails />;
            case "view-personal":
                 return <AdminPersonalView />;
            case "view-professional":
                 return <AdminProfessionalView />;
             case "view-finance":
                  return <AdminFinanceView />;
            case "view-project":
                 return <AdminProjectView />;

            default:
                return <ViewEmployees refresh={refresh}/>;
        }
    };

    return(
        <div className="dashboard-container">
            <div className="sidebar">
                <h3>ADMIN DASHBOARD</h3>
                <button onClick={()=> setActiveView("add")}>Add Employee</button>
                <button onClick={()=> setActiveView("update")}>Update Employee</button>
                <button onClick={()=> setActiveView("delete")}>Delete Employee</button>
                <button onClick={()=> setActiveView("view")}>View Employees</button>
                <button onClick={() => setActiveView("personal")}>Add Personal Details</button>
                <button onClick={() => setActiveView("professional")}>Add Professional Details</button>
                <button onClick={() => setActiveView("finance")}>Add Finance Details</button>
                <button onClick={() => setActiveView("project")}> Add Project Details</button>
                <button onClick={() => setActiveView("update-personal")}>Update Personal Details</button>
                <button onClick={() => setActiveView("update-professional")}>Update Professional Details</button>
                <button onClick={() => setActiveView("update-finance")}>Update Finance Details</button>
                <button onClick={() => setActiveView("update-project")}>Update Project Details</button>
                <button onClick={() => setActiveView("view-personal")}>View Personal Details</button>
                <button onClick={() => setActiveView("view-professional")}> View Professional Details</button>
                <button onClick={() => setActiveView("view-finance")}> View Finance Details</button>
                <button onClick={() => setActiveView("view-project")}>View Project Details</button>


        </div>
        <div className="content-area">
            <h1>Employee management System</h1>
            <div className="form-card">{renderContent()}</div>
        </div>
        <button className="logout-btn" onClick={logout}>Logout</button>
    </div>
    );
};
export default Dashboard;
