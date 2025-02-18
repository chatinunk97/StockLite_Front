import { useEffect } from "react";
import InputBar from "../../../../components/InputBar";
import SubmitButton from "../../../../components/SubmitButton";
import useWMSContext from "../../../../hooks/wms-hook";
export default function ShelfEditForm({ onClose }) {
  const {
    editShelfInput,
    setEditShelfInput,
    selectedShelf,
    editShelfFunction,
  } = useWMSContext();
  const inputList = [
    { id: 1, data: "shelfItemId", filterName: "Shelf ID", isDisabled: true },
    { id: 2, data: "stockId", filterName: "Stock ID", isDisabled: true },
    {
      id: 3,
      data: "productName",
      filterName: "Product name",
      isDisabled: true,
    },
    {
      id: 4,
      data: "shelfQuantity",
      filterName: "Current Shelf",
      isDisabled: true,
    },
    {
      id: 5,
      data: "stockQuantity",
      filterName: "Current Stock",
      isDisabled: true,
    },
    {
      id: 6,
      data: "quantityTobeMoved",
      filterName: "Quantity moving to shelf",
      isDisabled: false,
      type: "number",
    },
  ];
  useEffect(() => {
    const listEditInput = [
      "shelfItemId",
      "stockId",
      "productName",
      "stockQuantity",
      "shelfQuantity",
      "quantityTobeMoved",
    ];
    for (let i in selectedShelf) {
      if (!listEditInput.includes(i)) {
        delete selectedShelf[i];
      }
      if (!selectedShelf[i]) {
        selectedShelf[i] = 0;
      }
    }
    setEditShelfInput((prev) => {
      return { ...prev, ...selectedShelf };
    });
  }, []);

  const handleInputChange = async (event, field) => {
    await setEditShelfInput({
      ...editShelfInput,
      [field]: event.target.value,
    });
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    await editShelfFunction(editShelfInput);
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
                  value={editShelfInput[el.data]}
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
