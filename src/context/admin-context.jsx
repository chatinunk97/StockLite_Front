import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
  const [toolBarList, setToolBar] = useState([
    { id: 1, data: "userId", filterName: "User ID", isOn: false },
    { id: 2, data: "firstName", filterName: "First name", isOn: false },
    { id: 3, data: "lastName", filterName: "Last name", isOn: false },
    { id: 4, data: "username", filterName: "Username", isOn: false },
  ]);
  const [searchUserResult, setSearchUserResult] = useState([]);
  const searchUser = async (input) => {
    const { userId, firstName, lastName, username } = input;
    const result = await axios.get(
      `/manage/userfilter?userId=${userId || ""}&firstName=${
        firstName || ""
      }&lastName=${lastName || ""}&username=${username || ""}&userRole=`
    );
    return result;
  };
  const sharedObj = {
    toolBarList,
    setToolBar,
    searchUser,
    searchUserResult,
    setSearchUserResult,
  };
  return (
    <AdminContext.Provider value={sharedObj}>{children}</AdminContext.Provider>
  );
}
