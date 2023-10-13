import { useState } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const App = ({ data }) => {
  const [rowData] = useState([
    {
      userId: 1,
      createdAt: 123,
      lastName: "Komu",
      username: "rock",
      userRole: "wow",
    },
  ]);

  const [columnDefs] = useState([
    { field: "userId" },
    { field: "createdAt" },
    { field: "firstName" },
    { field: "lastName" },
    { field: "username" },
    { field: "userRole" },
  ]);

  return (
    <div className="ag-theme-alpine" >
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};

export default App;
