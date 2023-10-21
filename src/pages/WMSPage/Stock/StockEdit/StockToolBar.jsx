import useWMSContext from "../../../../hooks/wms-hook";
import InputBar from "../../../../components/InputBar";
import SubmitButton from "../../../../components/SubmitButton";
import DropdownSearch from "../../../../components/DropdownSearch";
export default function OrderToolBar() {
  const {
    createStockInput,
    setCreateStockInput,
    searchOrderResult,
    stockCreateFunction,
  } = useWMSContext();
  function restructureSuppliers(arr) {
    return arr.map((obj) => {
      return {
        value: obj.orderId,
        label: `Order ID :${obj.orderId}  Supplier : ${obj.supplierName}`,
      };
    });
  }
  const rearrangedOptions = restructureSuppliers(searchOrderResult);
  const inputList = [
    { id: 1, data: "orderId", filterName: "Order ID" , type: "dropdownSearch" },
    { id: 2, data: "productName", filterName: "Product Name" },
    { id: 3, data: "stockQuantity", filterName: "Stock Quantity" },
    { id: 4, data: "pricePerUnit", filterName: "Price Per Unit" },
    { id: 5, data: "expirationDate", filterName: "EXP date" , type : "date" },
  ];


  const handleInputChange = (event, field) => {
    if (field === "orderId") {
      setCreateStockInput({
        ...createStockInput,
        orderId: event.value,
      });
    } else {
      setCreateStockInput({
        ...createStockInput,
        [field]: event.target.value,
      });
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          stockCreateFunction();
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
                  value={createStockInput[el.data]}
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
