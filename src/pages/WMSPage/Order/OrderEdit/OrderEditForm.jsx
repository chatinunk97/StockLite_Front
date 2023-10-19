import { useEffect } from "react";
import InputBar from "../../../../components/InputBar";
import SubmitButton from "../../../../components/SubmitButton";
import useWMSContext from "../../../../hooks/wms-hook";
export default function OrderEditForm({ onClose }) {
  const {
    editOrderInput,
    setEditOrderInput,
    selectedOrder,
    editOrderFunction,
  } = useWMSContext();
  const inputList = [
    { id: 1, data: "orderId", filterName: "ID", isDisabled: true },
    { id: 2, data: "receiveDate", filterName: "Receive Date", type: "date" },
    {
      id: 3,
      data: "username",
      filterName: "Responsible User",
      isDisabled: true,
    },
    {
      id: 4,
      data: "supplierName",
      filterName: "Supplier Name",
      isDisabled: true,
    },
    { id: 5, data: "sumPrice", filterName: "Total Expense" },
  ];
  const handleInputChange = async (event, field) => {
    setEditOrderInput({
      ...editOrderInput,
      [field]: event.target.value,
    });
  };
  useEffect(()=>{setEditOrderInput(selectedOrder)},[])

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    editOrderFunction()
    // await editSupplierFunction(editSupplierInput);
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
                  isDisabled={el.isDisabled}
                  value={editOrderInput[el.data]}
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
