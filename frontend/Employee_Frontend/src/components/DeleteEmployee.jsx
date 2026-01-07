import { useState } from "react";
import { deleteEmployeeById } from "../services/employeeService";

const DeleteEmployee = ({ onSuccess }) => {
  const [id, setId] = useState("");

  const handleDelete = () => {
    if (!id) {
      alert("Please enter Employee ID");
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (confirmDelete) {
      deleteEmployeeById(id)
        .then(() => {
          alert("Employee deleted successfully");
          if (onSuccess) onSuccess();
          setId("");
        })
        .catch(() => {
          alert("Error deleting employee");
        });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Delete Employee</h2>
      <input
        type="number"
        placeholder="Enter Employee ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button className="button-delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default DeleteEmployee;
