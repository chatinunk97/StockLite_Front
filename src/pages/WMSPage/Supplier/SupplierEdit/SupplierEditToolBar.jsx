import useWMSContext from "../../../../hooks/wms-hook";
import InputBar from "../../../../components/InputBar";
import SubmitButton from "../../../../components/SubmitButton";

export default function SupplierEditToolBar() {
  const { createSupplierInput, setCreateSupplierInput,createSupplierFunction } = useWMSContext();

  const inputList = [
    { id: 1, data: "supplierName", filterName: "Supplier name" },
    { id: 2, data: "supplierAddress", filterName: "Supplier Address" },
    {
      id: 3,
      data: "supplierTel",
      filterName: "Supplier Tel",
    },
  ];
  const handleInputChange = (event, field) => {
    setCreateSupplierInput({
      ...createSupplierInput,
      [field]: event.target.value,
    });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createSupplierFunction()
        }}
        className=" md:px-10 lg:px-48 py-5 flex flex-col gap-5"
      >
        {inputList.map((el) => {
          return (
            <div className="flex" key={el.id}>
              <div className="font-semibold w-72 flex justify-center items-center bg-white rounded-md">
                {el.filterName}
              </div>
              <InputBar
                value={createSupplierInput[el.data]}
                onChange={(event) => {
                  handleInputChange(event, el.data);
                }}
              />
            </div>
          );
        })}
        <SubmitButton width="w-full">Create Supplier</SubmitButton>
      </form>
    </div>
  );
}
