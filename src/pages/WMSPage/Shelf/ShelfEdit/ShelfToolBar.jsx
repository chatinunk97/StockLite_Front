import useWMSContext from "../../../../hooks/wms-hook";
import InputBar from "../../../../components/InputBar";
import SubmitButton from "../../../../components/SubmitButton";
import DropdownSearch from "../../../../components/DropdownSearch";
export default function ShelfToolBar() {
  const {
    shelfCreateInput,
    setShelfCreateInput,
    searchStockResult,
    shelfCreateFunction,
  } = useWMSContext();
  function restructureSuppliers(arr) {
    return arr.map((obj) => {
      return {
        value: obj.stockId,
        label: `Stock ID : ${obj.stockId}  Product : ${obj.productName}`,
      };
    });
  }
  const rearrangedOptions = restructureSuppliers(searchStockResult);
  const inputList = [
    {
      id: 1,
      data: "stockId",
      filterName: "Stock ID",
      type: "dropdownSearch",
    },
  ];

  const handleInputChange = (event) => {
    setShelfCreateInput({ stockId: event.value });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          shelfCreateFunction()
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
                  value={shelfCreateInput[el.data]}
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
