import React from "react";
import SubmitButton from "./SubmitButton";
import { useAdminContext } from "../hooks/admin-hook";
import AdminCreateToolBarList from "../pages/AdminPage/AdminCreateUser/AdminCreateToolBarList";
import {useAuthContext} from '../hooks/auth-hook'
import axios from "axios";

export default function ToolBar() {
  // const { toolBarList, setToolBar } = useAdminContext();
  const { createUserInput, setCreateUserInput,  } = useAdminContext();
  const {LoginUser} = useAuthContext()
  const handleCreateUser = async () => {
    try {
      const inputWithCompanyID = {... createUserInput, companyId : LoginUser.companyId}
      console.log(inputWithCompanyID)
      const result = await axios.post("manage/user",inputWithCompanyID);
      console.log(result.data.createUserresult)
    } catch (error) {
      console.log(error)
      
    }

  };
  return (
    <div className=" bg-smoothgray flex flex-col relative pt-5">
      <div className="flex justify-center items-center gap-20">
        {/* Filter Box */}
      </div>
      <AdminCreateToolBarList
        data={createUserInput}
        setData={setCreateUserInput}
      ></AdminCreateToolBarList>
      <div className=" text-center">
        <SubmitButton width="w-full" onClick={handleCreateUser}>
          Create User
        </SubmitButton>
      </div>
    </div>
  );
}
