import { useState } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const DisplayTable = ({ columnFormat, data, format, setSelectedRow }) => {
  //Format determine what Primary key of the data to retrieve when clicked on the row
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "auto" }}>
      <AgGridReact
        onRowClicked={(e) => setSelectedRow(e.data[format])}
        rowData={data}
        columnDefs={columnFormat}
      ></AgGridReact>
    </div>
  );
};

export default DisplayTable;
