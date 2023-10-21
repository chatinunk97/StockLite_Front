import { useEffect } from "react";
import InputBar from "../../../../components/InputBar";
import SubmitButton from "../../../../components/SubmitButton";
import useWMSContext from "../../../../hooks/wms-hook";
export default function StockEditForm({ onClose }) {
  const {
    editSupplierInput,
    setEditSupplierInput,
    selectedSupplier,
    editSupplierFunction,
  } = useWMSContext();
  const inputList = [
    { id: 1, data: "supplierId", filterName: "ID" },
    { id: 2, data: "supplierName", filterName: "Supplier name" },
    { id: 3, data: "supplierAddress", filterName: "Supplier Address" },
    {
      id: 4,
      data: "supplierTel",
      filterName: "Supplier Tel",
    },
  ];
  useEffect(() => {
    setEditSupplierInput(selectedSupplier);
  }, []);
  const handleInputChange = async (event, field) => {
    await setEditSupplierInput({
      ...editSupplierInput,
      [field]: event.target.value,
    });
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    await editSupplierFunction(editSupplierInput)
    onClose(false);
  };
  return (
    <div>
      <div>
        <form
          onSubmit={handleEditSubmit}
          className=" md:px-10 lg:px-48 py-5 flex flex-col gap-5"
        >
          {inputList.map((el) => {
            return (
              <div className="flex" key={el.id}>
                <div className="font-semibold w-72 flex justify-center items-center bg-white rounded-md">
                  {el.filterName}
                </div>
                <InputBar
                  isDisabled={el.data === "supplierId" ? true : false}
                  value={editSupplierInput[el.data]}
                  onChange={(event) => {
                    handleInputChange(event, el.data);
                  }}
                />
              </div>
            );
          })}
          <SubmitButton>Save Change</SubmitButton>
        </form>
      </div>
    </div>
  );
}
