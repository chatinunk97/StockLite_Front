import { useState } from "react";
import useWMSContext from "../../../../hooks/wms-hook";
import InputBar from "../../../../components/InputBar";
import SubmitButton from "../../../../components/SubmitButton";

export default function SupplierEditToolBar() {
  const { createSupplierInput, setCreateSupplierInput, createSupplierFunction } = useWMSContext();
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const inputList = [
    { id: 1, data: "supplierName", filterName: "Supplier name" },
    { id: 2, data: "supplierAddress", filterName: "Supplier Address" },
    { id: 3, data: "supplierTel", filterName: "Supplier Tel" },
  ];

  const handleInputChange = (event, field) => {
    setCreateSupplierInput({
      ...createSupplierInput,
      [field]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true before submitting
    try {
      await createSupplierFunction(); // Ensure the function is asynchronous
    } finally {
      setIsLoading(false); // Set loading to false after completion
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="md:px-10 lg:px-48 py-5 flex flex-col gap-5">
        {inputList.map((el) => (
          <div className="flex" key={el.id}>
            <div className="font-semibold w-72 flex justify-center items-center bg-white rounded-md">
              {el.filterName}
            </div>
            <InputBar
              value={createSupplierInput[el.data]}
              onChange={(event) => handleInputChange(event, el.data)}
            />
          </div>
        ))}
        <SubmitButton isLoading={isLoading} width="w-full">
          Create Supplier
        </SubmitButton>
      </form>
    </div>
  );
}
