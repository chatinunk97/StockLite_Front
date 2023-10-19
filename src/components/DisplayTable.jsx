import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import ExcelJS from "exceljs";

const DisplayTable = ({ columnFormat, data, format, setSelectedRow }) => {
  const exportToExcel = () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Ag-Grid Data");

    // Extract column headers from columnFormat
    const columnHeaders = columnFormat.map((column) => column.headerName);
    worksheet.addRow(columnHeaders);

    // Extract data from Ag-Grid
    data.forEach((rowData) => {
      const row = [];
      columnFormat.forEach((column) => {
        row.push(rowData[column.field]);
      });
      worksheet.addRow(row);
    });

    // Create a blob and initiate a download
    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "ag-grid-data.xlsx";
      a.click();
      window.URL.revokeObjectURL(url);
    });
  };
  const gridOptions = {
    defaultColDef: {
      resizable: true,
    },
    columnDefs: columnFormat,
    rowData: data,
    
  };
  return (
    <div>
      <div className=" flex justify-end p-2">
        <button
          onClick={exportToExcel}
          className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-6 rounded-md shadow-md  hover:from-blue-700 hover:to-green-700"
        >
          Export to Excel
        </button>
      </div>
      <div className="ag-theme-alpine" style={{ height: 400, width: "auto" }}>
        <AgGridReact
          onRowClicked={(e) =>
            setSelectedRow ? setSelectedRow(e.data[format]) : ""
          }
          rowData={data}
          gridOptions={gridOptions}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default DisplayTable;
