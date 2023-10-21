import { useEffect } from "react";
import useWMSContext from "../../../hooks/wms-hook";
import DisplayTable from "../../../components/DisplayTable";
import { Alert3Choice } from "../../../utils/sweetAlert";
export default function StockDisplayBox({ openModal }) {
  const {
    searchSupplier,
    searchStockResult,
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
    { field: "stockId", headerName: "ID", width: 50 },
    { field: "productName", headerName: "Product", flex: 1 },
    { field: "pricePerUnit", headerName: "PPU (THB)", flex: 1 },
    { field: "stockQuantity", headerName: "Stock", flex: 1 },
    { field: "expirationDate", headerName: "EXP date", flex: 1 },
    { field: "orderId", headerName: "Order ID", flex: 1 },
    { field: "supplierName", headerName: "Supplier", flex: 1 },
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
        data={searchStockResult}
        columnFormat={adGridColumnFormat}
      ></DisplayTable>
    </div>
  );
}
