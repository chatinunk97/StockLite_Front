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
    try {
      const { userId, firstName, lastName, username } = input;
      console.log(userId)
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
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    searchUser(searchInput);
    axios.get("/manage/sales").then((res) => {
      const data = res.data;
      const summarizedData = data.searchResult.reduce((acc, transaction) => {
        const existingUser = acc.find(
          (user) => user.username === transaction.User.username
        );

        if (existingUser) {
          // Update the existing user's sales
          existingUser.sales += transaction.sumSale;
        } else {
          // Add a new user entry
          acc.push({
            id: acc.length + 1,
            username: transaction.User.username,
            sales: transaction.sumSale,
          });
        }

        return acc;
      }, []);
      setRawData(summarizedData);
    });
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
    active: "",
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
  const [rawData, setRawData] = useState([]);

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
    editUserFunction,
    rawData,
  };
  return (
    <AdminContext.Provider value={sharedObj}>{children}</AdminContext.Provider>
  );
}
