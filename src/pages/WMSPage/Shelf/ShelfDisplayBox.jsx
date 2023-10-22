import { useEffect } from "react";
import useWMSContext from "../../../hooks/wms-hook";
import DisplayTable from "../../../components/DisplayTable";
import { Alert3Choice } from "../../../utils/sweetAlert";
export default function StockDisplayBox({ openModal }) {
  const {
    searchShelfResult,
    setSelectedShelf,
    shelfDeleteFunction,
  } = useWMSContext();

  const adGridColumnFormat = [
    { field: "shelfItemId", headerName: "ShelfID", width: 100,sortable: true },
    { field: "stockId", headerName: "Stock ID", width: 100 ,sortable: true},
    { field: "productName", headerName: "Product name", flex: 1 ,sortable: true},
    { field: "pricePerUnit", headerName: "PPU (THB)", flex: 1 ,sortable: true},
    { field: "shelfQuantity", headerName: "On shelf Count", flex: 1 ,sortable: true },
    { field: "stockQuantity", headerName: "Stock", flex: 1,sortable: true },
    { field: "expirationDate", headerName: "EXP Date", flex: 1 ,sortable: true},
    {
      field: "actionButtons",
      headerName: "Action Buttons",
      cellRenderer: (params) => (
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedShelf(params.data);
              console.log(params.data)
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
                `Are you sure you want to delete Shelf Id : ${params.data.shelfItemId}`
              ).then((res) => {
                if (res.value) {
                  shelfDeleteFunction(params.data.shelfItemId);
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
        data={searchShelfResult}
        columnFormat={adGridColumnFormat}
      ></DisplayTable>
    </div>
  );
}
