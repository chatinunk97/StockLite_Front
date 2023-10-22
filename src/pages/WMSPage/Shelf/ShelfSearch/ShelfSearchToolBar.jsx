import useWMSContext from "../../../../hooks/wms-hook";
import InputBar from "../../../../components/InputBar";
import ToolBarCheckBox from "../../../../components/ToolBarCheckBox";
import SubmitButton from "../../../../components/SubmitButton";
export default function ShelfSearchToolBar() {
  const {
    shelfBar,
    setShelfBar,
    setSearchShelfInput,
    searchShelfInput,
    searchShelfFunction,
  } = useWMSContext();

  const handleCheckBoxChange = (e) => {
    const findIndex = shelfBar.findIndex((el) => {
      if (el.data === e.target.id) {
        setSearchShelfInput({ ...searchShelfInput, [el.data]: "" });
        return el;
      }
    });
    const newshelfBar = [...shelfBar];
    newshelfBar[findIndex].isOn = e.target.checked;
    setShelfBar(newshelfBar);
  };

  const handleInputChange = (event, field) => {
    setSearchShelfInput({ ...searchShelfInput, [field]: event.target.value });
  };
  return (
    <div>
      <div className="grid grid-cols-2 md:flex justify-center items-center lg:gap-10">
        {shelfBar.map((el) => {
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
          searchShelfFunction(searchShelfInput)
        }}
        className=" md:px-10 lg:px-48 py-5 flex flex-col gap-5"
      >
        {shelfBar.map((el) => {
          if (el.isOn) {
            return (
              <div className="flex" key={el.id}>
                <div className="font-semibold w-72 flex justify-center items-center bg-white rounded-md">
                  {el.filterName}
                </div>
                <InputBar
                  type={el.type}
                  value={searchShelfInput[el.data]}
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
