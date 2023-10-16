import { useState } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";


const DisplayTable = ({ columnFormat, data, format, setSelectedRow }) => {
  //Format determine what Primary key of the data to retrieve when clicked on the row

  const gridOptions = {
    defaultColDef: {
      resizable: true,
      flex : 1
      
    },
    columnDefs: columnFormat,
    rowData: null,
  };
  
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "auto" }}>
      <AgGridReact
        onRowClicked={(e) => setSelectedRow ? setSelectedRow(e.data[format]) : ""}
        rowData={data}
        gridOptions={gridOptions}
      ></AgGridReact>
    </div>
  );
};

export default DisplayTable;
