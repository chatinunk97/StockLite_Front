import React from "react";
import ToolBarCheckBox from "./ToolBarCheckBox";
import InputBar from "../components/InputBar";
import SubmitButton from "../components/SubmitButton";
import { useAdminContext } from "../hooks/admin-hook";

export default function ToolBar() {
  const { toolBarList, setToolBar } = useAdminContext();

  const handleCheckBoxChange = (e) => {
    const findIndex = toolBarList.findIndex((el) => el.data === e.target.id);
    const newToolBarList = [...toolBarList];
    newToolBarList[findIndex].isOn = e.target.checked;
    setToolBar(newToolBarList);
  };

  return (
    <div className=" bg-smoothgray flex flex-col relative pt-5  ">
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
      <form className="px-48 py-5 flex flex-col gap-5">
        {toolBarList.map((el) => {
          if (el.isOn) {
            return (
              <div className="flex gap-9 " key={el.id}>
                <div className="w-72 flex justify-center items-center bg-white rounded-md">
                  {el.filterName}
                </div>
                <InputBar  />
              </div>
            );
          }
        })}
      </form>
      <div className=" text-center">
        <SubmitButton width="w-full">Search</SubmitButton>
      </div>
    </div>
  );
}
