import ToolBarCheckBox from "../../../components/ToolBarCheckBox";
import InputBar from "../../../components/InputBar";
import SubmitButton from "../../../components/SubmitButton";
import { useAdminContext } from "../../../hooks/admin-hook";

export default function AdminSearchToolBar({ searchInput, setSearchInput }) {
  const { toolBarList, setToolBar, searchUser, setSearchUserResult } =
    useAdminContext();

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
    <div className=" bg-smoothgray flex flex-col relative p-5 rounded-md">
      <div className="flex justify-center items-center gap-20">
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
          searchUser(searchInput);
        }}
        className="px-48 py-5 flex flex-col gap-5"
      >
        {toolBarList.map((el) => {
          if (el.isOn) {
            return (
              <div className="flex gap-9 " key={el.id}>
                <div className="w-72 flex justify-center items-center bg-white rounded-md">
                  {el.filterName}
                </div>
                <InputBar
                  value={searchInput[el.data]}
                  onChange={(event) => {
                    handleInputChange(event, el.data);
                  }}
                />
              </div>
            );
          }
        })}
      </form>
      <div className=" text-center">
        <SubmitButton
          width="w-full"
          onClick={() => {
            searchUser(searchInput);
          }}
        >
          Search
        </SubmitButton>
      </div>
    </div>
  );
}
