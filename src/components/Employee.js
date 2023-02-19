import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
  const navigate = useNavigate();
  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  return (
    <tr key={employee.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.emailId}</div>
      </td>
      <td className="text-right cursor-pointer px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, id) => editEmployee(e, employee.id)}
          // className="text-blue-600 hover:text-blue-800 px-4 hover:cursor-pointer">
          className="rounded text-white font-semibold bg-gray-500 hover:bg-gray-900 py-2 px-5">
          Edit
        </a>
        <> </>
        <a
          onClick={(e, id) => deleteEmployee(e, employee.id)}
          // className="text-rose-600 hover:text-rose-800 hover:cursor-pointer">
          className="rounded text-white font-semibold bg-gray-500 hover:bg-gray-900 py-2 px-3">
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Employee;