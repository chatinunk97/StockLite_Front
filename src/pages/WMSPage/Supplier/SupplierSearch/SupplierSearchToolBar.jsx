import useWMSContext from "../../../../hooks/wms-hook";
import InputBar from "../../../../components/InputBar";
import ToolBarCheckBox from "../../../../components/ToolBarCheckBox";
import SubmitButton from "../../../../components/SubmitButton";
export default function SupplierSearchToolBar() {
  const {
    toolBarList,
    setToolBar,
    setSearchInput,
    searchInput,
    searchSupplier,
  } = useWMSContext();

  const handleCheckBoxChange = (e) => {
    const findIndex = toolBarList.findIndex((el) => {
      if (el.data === e.target.id) {
        setSearchInput({ ...searchInput, [el.data]: "" });
        return el;
      }
    });
    const newToolBarList = [...toolBarList];
    newToolBarList[findIndex].isOn = e.target.checked;
    setToolBar(newToolBarList);
  };

  const handleInputChange = (event, field) => {
    setSearchInput({ ...searchInput, [field]: event.target.value });
  };
  return (
    <div>
      <div className="grid grid-cols-2 2xl:flex justify-center items-center lg:gap-10">
        {toolBarList.map((el) => {
          return (
            <ToolBarCheckBox
              value={el.isOn}
              key={el.id}
              data={el.data}
              onChange={handleCheckBoxChange}
            >
              {el.filterName}
            </ToolBarCheckBox>
          );
        })}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchSupplier(searchInput);
        }}
        className=" md:px-10 lg:px-48 py-5 flex flex-col gap-5"
      >
        {toolBarList.map((el) => {
          if (el.isOn) {
            return (
              <div className="flex" key={el.id}>
                <div className="font-semibold w-72 flex justify-center items-center bg-white rounded-md">
                  {el.filterName}
                </div>
                <InputBar
                  type={el.type}
                  value={searchInput[el.data]}
                  onChange={(event) => {
                    handleInputChange(event, el.data);
                  }}
                />
              </div>
            );
          }
        })}
        <SubmitButton width="w-full">Search</SubmitButton>
      </form>
    </div>
  );
}
