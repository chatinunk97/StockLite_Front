import useWMSContext from "../../../../hooks/wms-hook";
import InputBar from "../../../../components/InputBar";
import SubmitButton from "../../../../components/SubmitButton";
import DropdownSearch from "../../../../components/DropdownSearch";
export default function OrderToolBar() {
  const {
    createOrderInput,
    setCreateOrderInput,
    searchSupplierResult,
    createOrderFunction,
  } = useWMSContext();
  function restructureSuppliers(arr) {
    return arr.map((obj) => {
      return {
        value: obj.supplierId,
        label: obj.supplierName,
      };
    });
  }
  const rearrangedOptions = restructureSuppliers(searchSupplierResult);
  const inputList = [
    {
      id: 1,
      data: "supplierId",
      filterName: "Supplier ID",
      type: "dropdownSearch",
    },
    { id: 2, data: "receiveDate", filterName: "Receive Date", type: "date" },
    { id: 3, data: "sumPrice", filterName: "Total expense" ,type : "number"},
  ];
  const handleInputChange = (event, field) => {
    if (field === "supplierId") {
      setCreateOrderInput({
        ...createOrderInput,
        supplierId: event.value,
      });
    } else {
      setCreateOrderInput({
        ...createOrderInput,
        [field]: event.target.value,
      });
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createOrderFunction()
        }}
        className=" md:px-10 lg:px-48 py-5 flex flex-col gap-5"
      >
        {inputList.map((el) => {
          return (
            <div className="flex" key={el.id}>
              <div className="font-semibold w-72 flex justify-center items-center bg-white rounded-md">
                {el.filterName}
              </div>
              {el.type === "dropdownSearch" ? (
                <DropdownSearch
                  data={rearrangedOptions}
                  onChange={handleInputChange}
                  filterName={el.data}
                />
              ) : (
                <InputBar
                  type={el.type}
                  value={createOrderInput[el.data]}
                  onChange={(event) => {
                    handleInputChange(event, el.data);
                  }}
                />
              )}
            </div>
          );
        })}
        <SubmitButton width="w-full">Create Order</SubmitButton>
      </form>
    </div>
  );
}
