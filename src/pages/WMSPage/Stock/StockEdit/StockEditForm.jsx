import { useEffect } from "react";
import InputBar from "../../../../components/InputBar";
import SubmitButton from "../../../../components/SubmitButton";
import useWMSContext from "../../../../hooks/wms-hook";
export default function StockEditForm({ onClose }) {
  const {
    editStockInput,
    setEditStockInput,
    selectedStock,
    editStockFunction,
  } = useWMSContext();
  const inputList = [
    { id: 1, data: "stockId", filterName: "Stock ID", isDisabled: true },
    {
      id: 2,
      data: "supplierName",
      filterName: "Supplier Name",
      isDisabled: true,
    },
    { id: 3, data: "productName", filterName: "Product Name" },
    { id: 4, data: "stockQuantity", filterName: "Stock" },
    { id: 5, data: "pricePerUnit", filterName: "Price per unit" },
    { id: 6, data: "expirationDate", filterName: "EXP Date", type: "date" },
  ];
  useEffect(() => {
    const listEditInput = [
      "stockId",
      "supplierName",
      "productName",
      "stockQuantity",
      "pricePerUnit",
      "expirationDate",
    ];
    for (let i in selectedStock) {
      if (!listEditInput.includes(i)) {
        delete selectedStock[i];
      }
      if(!selectedStock[i]){
        selectedStock[i] = ""
      }
    }
    setEditStockInput(selectedStock);
  }, []);
  const handleInputChange = async (event, field) => {
    await setEditStockInput({
      ...editStockInput,
      [field]: event.target.value,
    });
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    await editStockFunction(editStockInput);
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
                  type={el.type}
                  isDisabled={el.isDisabled ? true : false}
                  value={editStockInput[el.data]}
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
