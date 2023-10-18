import useWMSContext from "../../../../hooks/wms-hook";
import ToolBarCheckBox from "../../../../components/ToolBarCheckBox";
import InputBar from "../../../../components/InputBar";
import SubmitButton from "../../../../components/SubmitButton";
export default function OrderSearchToolBar() {
  const {
    orderBar,
    setOrderBar,
    setSearchOrderInput,
    searchOrderInput,
    searchOrderFunction,
  } = useWMSContext();
  const handleCheckBoxChange = (e) => {
    const findIndex = orderBar.findIndex((el) => {
      if (el.data === e.target.id) {
        setSearchOrderInput({ ...searchOrderInput, [el.data]: "" });
        return el;
      }
    });
    const neworderBar = [...orderBar];
    neworderBar[findIndex].isOn = e.target.checked;
    setOrderBar(neworderBar);
  };

  const handleInputChange = (event, field) => {
    setSearchOrderInput({ ...searchOrderInput, [field]: event.target.value });
  };
  return (
    <div>
      <div className="grid grid-cols-2 md:flex justify-center items-center lg:gap-10">
        {orderBar.map((el) => {
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
          searchOrderFunction(searchOrderInput);
        }}
        className=" md:px-10 lg:px-48 py-5 flex flex-col gap-5"
      >
        {orderBar.map((el) => {
          if (el.isOn) {
            return (
              <div className="flex" key={el.id}>
                <div className="font-semibold w-72 flex justify-center items-center bg-white rounded-md">
                  {el.filterName}
                </div>
                <InputBar
                  value={searchOrderInput[el.data]}
                  onChange={(event) => {
                    handleInputChange(event, el.data);
                  }}
                  type={el.type}
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
