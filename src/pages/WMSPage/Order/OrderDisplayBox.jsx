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
    { field: "orderId", headerName: "ID" ,width : 70,sortable: true},
    { field: "receiveDate", headerName: "Date",flex: 1,sortable: true },
    { field: "username", headerName: "Responsible User",flex: 1 ,sortable: true},
    { field: "supplierName", headerName: "Supplier name",flex: 1 ,sortable: true},
    { field: "sumPrice", headerName: "Total expense",flex: 1 ,sortable: true},
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
            className="font-bold text-white w-full bg-green-600 rounded-lg flex justify-center items-center px-2"
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
            className="font-bold text-white w-full bg-red-500 hover:bg-red-300 hover:text-black rounded-lg flex justify-center items-center px-2"
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
