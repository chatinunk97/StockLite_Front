import { useEffect } from "react";
import useWMSContext from "../../../hooks/wms-hook";
import DisplayTable from "../../../components/DisplayTable";
export default function OrderDisplayBox() {
  const { searchSupplier, searchSupplierResult } = useWMSContext();
  useEffect(() => {
    searchSupplier({
      supplierId: "",
      supplierName: "",
      supplierAddress: "",
      supplierTel: "",
    }).then(() => {
      console.log(searchSupplierResult);
    });
  }, []);

  const adGridColumnFormat = [
    { field: "orderId", headerName: "ID" },
    { field: "receiveDate", headerName: "Date" },
    { field: "username", headerName: "Responsible User" },
    { field: "supplierName", headerName: "Supplier name" },
    { field: "sumPrice", headerName: "Total expense" },
  ];

  const mockOrderData = [
    {
      orderId: "OrderID#",
      receiveDate: "DATEE",
      username: "USER NAMEE",
      sumPrice: 12222,
      supplierName : "7-11"
    },
  ];
  return (
    <div>
      OrderDisplayBox
      <DisplayTable
        data={mockOrderData}
        columnFormat={adGridColumnFormat}
      ></DisplayTable>
    </div>
  );
}
