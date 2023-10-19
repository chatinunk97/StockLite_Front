import DisplayTable from "../../../components/DisplayTable";
import useWMSContext from "../../../hooks/wms-hook";
import { Alert3Choice } from "../../../utils/sweetAlert";
export default function SupplierDisplayBox({ openModal }) {
  const { searchSupplierResult, setSelectedSupplier, deleteSupplierFunction } =
    useWMSContext();
  const adGridColumnFormat = [
    { field: "supplierId", headerName: "ID", width: 50 },
    { field: "supplierName", headerName: "Supplier name", flex: 1 },
    { field: "supplierAddress", headerName: "Supplier Address", flex: 1 },
    { field: "supplierTel", headerName: "Supplier Tel", flex: 1 },
    { field: "createdAt", headerName: "Created Date", flex: 1 },
    {
      field: "actionButtons",
      headerName: "Action Buttons",
      cellRenderer: (params) => (
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedSupplier(params.data);
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
                `Are you sure you want to delete Supplier : ${params.data.supplierName}`
              ).then((res) => {
                if (res.value) {
                  deleteSupplierFunction(params.data.supplierId);
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
    <div className="relative">
      <DisplayTable
        data={searchSupplierResult}
        columnFormat={adGridColumnFormat}
      ></DisplayTable>
    </div>
  );
}
