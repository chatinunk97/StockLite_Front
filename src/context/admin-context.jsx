import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import date from "date-and-time";
import { useEffect } from "react";
import { AlertNotiSuc } from "../utils/sweetAlert";
export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
  const [toolBarList, setToolBar] = useState([
    { id: 1, data: "userId", filterName: "User ID", isOn: true },
    { id: 2, data: "firstName", filterName: "First name", isOn: false },
    { id: 3, data: "lastName", filterName: "Last name", isOn: false },
    { id: 4, data: "username", filterName: "Username", isOn: false },
  ]);
  const [searchInput, setSearchInput] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    username: "",
  });
  const [searchUserResult, setSearchUserResult] = useState([]);
  const searchUser = async (input) => {
    const { userId, firstName, lastName, username } = input;
    const result = await axios.get(
      `/manage/userfilter?userId=${userId || ""}&firstName=${
        firstName || ""
      }&lastName=${lastName || ""}&username=${username || ""}&userRole=`
    );
    for (let user of result.data.searchResult) {
      user.createdAt = date.transform(
        user.createdAt.split("T")[0],
        "YYYY-MM-DD",
        "DD MMM YYYY"
      );
    }
    setSearchUserResult(result.data.searchResult);
  };

  useEffect(() => {
    searchUser(searchInput).catch((error) => console.log(error));
  }, []);

  const [createUserInput, setCreateUserInput] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    repeat_password: "",
    email: "",
    companyId: "",
    userRole: "employee",
  });

  const [editUserInput, setEditUserInput] = useState({
    userId: "",
    username: "",
    createdAt: "",
    companyId: "",
    firstName: "",
    lastName: "",
    userRole: "",
  });
  const [selectedRow, setSelectedRow] = useState(null);
  const deleteUserFunction = async (userId) => {
    try {
      const result = await axios.delete(`/manage/user?userId=${userId}`);
      AlertNotiSuc("success", "Delete Successful", result.data.message);
      setSearchUserResult(
        searchUserResult.filter((el) => el.userId !== userId)
      );
      setEditUserInput({
        userId: "",
        username: "",
        createdAt: "",
        companyId: "",
        firstName: "",
        lastName: "",
        userRole: "",
      });
    } catch (error) {
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response.data.message}`
      );
    }
  };
  const editUserFunction = async (input) => {
    try {
      const result = await axios.patch(`/manage/user`, input);

      setEditUserInput({
        userId: "",
        username: "",
        createdAt: "",
        companyId: "",
        firstName: "",
        lastName: "",
        userRole: "",
      });
      await searchUser(searchInput);
      AlertNotiSuc("success", "Change Saved!", result.data.message);
    } catch (error) {
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response.data.message}`
      );
    }
  };
  const sharedObj = {
    toolBarList,
    setToolBar,
    searchUser,
    searchUserResult,
    setSearchUserResult,
    createUserInput,
    setCreateUserInput,
    searchInput,
    setSearchInput,
    setSelectedRow,
    selectedRow,
    editUserInput,
    setEditUserInput,
    deleteUserFunction,
    editUserFunction
  };
  return (
    <AdminContext.Provider value={sharedObj}>{children}</AdminContext.Provider>
  );
}
