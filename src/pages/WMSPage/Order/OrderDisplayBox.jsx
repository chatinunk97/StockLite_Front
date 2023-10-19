import { useEffect } from "react";
import useWMSContext from "../../../hooks/wms-hook";
import DisplayTable from "../../../components/DisplayTable";
import { Alert3Choice } from "../../../utils/sweetAlert";
export default function OrderDisplayBox({ openModal }) {
  const {
    searchSupplier,
    searchOrderResult,
    deleteOrderFunction,
    setSelectedOrder,
  } = useWMSContext();
  useEffect(() => {
    searchSupplier({
      supplierId: "",
      supplierName: "",
      supplierAddress: "",
      supplierTel: "",
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const adGridColumnFormat = [
    { field: "orderId", headerName: "ID" },
    { field: "receiveDate", headerName: "Date" },
    { field: "username", headerName: "Responsible User" },
    { field: "supplierName", headerName: "Supplier name" },
    { field: "sumPrice", headerName: "Total expense" },
    {
      field: "actionButtons",
      headerName: "Action Buttons",
      cellRenderer: (params) => (
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedOrder(params.data);
              openModal(true);
            }}
            className="bg-green-400 rounded-lg flex justify-center items-center px-2"
          >
            Edit
          </button>
          <button
            onClick={() => {
              Alert3Choice(
                "Confirm Delete",
                true,
                "Confirm",
                "Cancel",
                `Are you sure you want to delete Order Id : ${params.data.orderId}`
              ).then((res) => {
                if (res.value) {
                  deleteOrderFunction(params.data.orderId);
                }
              });
            }}
            className="bg-red-500 rounded-lg flex justify-center items-center px-2"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <DisplayTable
        data={searchOrderResult}
        columnFormat={adGridColumnFormat}
      ></DisplayTable>
    </div>
  );
}
