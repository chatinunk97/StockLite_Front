import DisplayTable from "../../../components/DisplayTable";
import useWMSContext from "../../../hooks/wms-hook";
import { Alert3Choice } from "../../../utils/sweetAlert";
export default function SupplierDisplayBox({ openModal }) {
  const { searchSupplierResult, setSelectedSupplier, deleteSupplierFunction } =
    useWMSContext();
  const adGridColumnFormat = [
    { field: "supplierId", headerName: "ID" },
    { field: "supplierName", headerName: "Supplier name" },
    { field: "supplierAddress", headerName: "Supplier Address" },
    { field: "supplierTel", headerName: "Supplier Tel" },
    { field: "createdAt", headerName: "Created Date" },
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
                `Are you sure you want to delete Supplier : ${params.data.supplierName}`
              ).then((res) => {
                if (res.value) {
                  deleteSupplierFunction(params.data.supplierId);
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
    <div className="relative">
      <DisplayTable
        data={searchSupplierResult}
        columnFormat={adGridColumnFormat}
      ></DisplayTable>
    </div>
  );
}
