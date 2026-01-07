import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import EmployeeDashboard from "./components/EmployeeDashboard";

/*  ADMIN ROUTE */
const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" />;

  const { role } = jwtDecode(token);

  if (role === "ADMIN") return children;
  if (role === "EMPLOYEE") return <Navigate to="/employee-dashboard" />;

  return <Navigate to="/login" />;
};


/* EMPLOYEE ROUTE */
const EmployeeRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" />;

  const { role } = jwtDecode(token);

  if (role === "EMPLOYEE") return children;
  if (role === "ADMIN") return <Navigate to="/dashboard" />;

  return <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Dashboard */}
        <Route
          path="/dashboard"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />

        {/* Employee Dashboard */}
        <Route
          path="/employee-dashboard"
          element={
            <EmployeeRoute>
              <EmployeeDashboard />
            </EmployeeRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
