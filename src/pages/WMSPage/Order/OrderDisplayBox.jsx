import { useEffect } from "react";
import useWMSContext from "../../../hooks/wms-hook";
import DisplayTable from "../../../components/DisplayTable";
export default function OrderDisplayBox() {
  const { searchSupplier, searchSupplierResult,searchOrderResult } = useWMSContext();
  useEffect(() => {
    searchSupplier({
      supplierId: "",
      supplierName: "",
      supplierAddress: "",
      supplierTel: "",
    }).catch((error) => {
      console.log(error)
    });
  }, []);

  const adGridColumnFormat = [
    { field: "orderId", headerName: "ID" },
    { field: "receiveDate", headerName: "Date" },
    { field: "username", headerName: "Responsible User" },
    { field: "supplierName", headerName: "Supplier name" },
    { field: "sumPrice", headerName: "Total expense" },
  ];

  return (
    <div>
      OrderDisplayBox
      <DisplayTable
        data={searchOrderResult}
        columnFormat={adGridColumnFormat}
      ></DisplayTable>
    </div>
  );
}
