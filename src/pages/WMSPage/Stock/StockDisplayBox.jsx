import { useEffect } from "react";
import useWMSContext from "../../../hooks/wms-hook";
import DisplayTable from "../../../components/DisplayTable";
import { Alert3Choice } from "../../../utils/sweetAlert";
export default function StockDisplayBox({ openModal }) {
  const {
    searchSupplier,
    searchStockResult,
    deleteStockFunction,
    setSelectedStock,
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
    { field: "stockId", headerName: "ID", width: 70,sortable: true },
    { field: "productName", headerName: "Product", flex: 1 ,sortable: true},
    { field: "pricePerUnit", headerName: "PPU (THB)", flex: 1 ,sortable: true},
    { field: "stockQuantity", headerName: "Stock", flex: 1 ,sortable: true},
    { field: "refillCount", headerName: "Refill Count", flex: 1 ,sortable: true },
    { field: "expirationDate", headerName: "EXP date", flex: 1,sortable: true },
    { field: "orderId", headerName: "Order ID", flex: 1 ,sortable: true},
    { field: "supplierName", headerName: "Supplier", flex: 1 ,sortable: true},
    {
      field: "actionButtons",
      headerName: "Action Buttons",
      cellRenderer: (params) => (
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedStock(params.data);
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
                `Are you sure you want to delete Stock Id : ${params.data.stockId}`
              ).then((res) => {
                if (res.value) {
                  deleteStockFunction(params.data.stockId);
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
