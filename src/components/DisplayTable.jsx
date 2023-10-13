import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";

export default function TestTable({ data, columnFormat }) {
  const columns = columnFormat;

  const rows = data;
  return <DataGrid columns={columns} rows={rows} className="rdg-light" />;
}
