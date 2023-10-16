import DisplayTable from "../../../components/DisplayTable";
import useWMSContext from "../../../hooks/wms-hook";

export default function SupplierDisplayBox() {
  const { searchSupplierResult, setSearchSupplierResult } = useWMSContext();
  const adGridColumnFormat = [
    { field: "supplierId", headerName: "ID" },
    { field: "supplierName", headerName: "Supplier name" },
    { field: "supplierAddress", headerName: "Supplier Address" },
    { field: "supplierTel", headerName: "Supplier Tel" },
    { field: "createdAt", headerName: "Created Date" },
  ];
  return (
    <div>
      SupplierDisplayBox
      <DisplayTable
        data={searchSupplierResult}
        columnFormat={adGridColumnFormat}
      ></DisplayTable>
    </div>
  );
}
