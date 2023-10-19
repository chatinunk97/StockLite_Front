import React from "react";
import InputBar from "../../../components/InputBar";
import OptionComponent from "../../../components/OptionComponent";
import SubmitButton from "../../../components/SubmitButton";
import { AlertNotiSuc } from "../../../utils/sweetAlert";
import { useAdminContext } from "../../../hooks/admin-hook";
import { useAuthContext } from "../../../hooks/auth-hook";
import date from "date-and-time";
import axios from "axios";

export default function AdminCreateToolBarList({ data, setData }) {
  const { createUserInput, setCreateUserInput, setSearchUserResult } =
    useAdminContext();
  const { LoginUser } = useAuthContext();
  const inputBarList = [
    { id: 1, data: "firstName", fieldName: "First name" },
    { id: 2, data: "lastName", fieldName: "Last name" },
    { id: 3, data: "username", fieldName: "Username" },
    { id: 4, data: "password", fieldName: "Password", type: "password" },
    {
      id: 5,
      data: "repeat_password",
      fieldName: "Confirm password",
      type: "password",
    },
    { id: 6, data: "email", fieldName: "Email", type: "email" },
    {
      id: 7,
      data: "userRole",
      fieldName: "User Role",
      option: [
        { id: 1, option: "employee" },
        { id: 2, option: "supervisor" },
      ],
    },
  ];
  const handleChange = (event, field) => {
    const newData = { ...data, [field]: event.target.value };
    setData(newData);
  };
  const handleCreateUser = async () => {
    try {
      const inputWithCompanyID = {
        ...createUserInput,
        companyId: LoginUser.companyId,
      };
      const result = await axios.post("manage/user", inputWithCompanyID);
      const newUser = result.data.createUserresult;
      newUser.createdAt = date.transform(
        newUser.createdAt.split("T")[0],
        "YYYY-MM-DD",
        "DD MMM YYYY"
      );

      setSearchUserResult((prev) => [newUser, ...prev]);
      setCreateUserInput({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        repeat_password: "",
        email: "",
        companyId: "",
        userRole: "employee",
      });
      AlertNotiSuc("success", "New User Created!", "User Created successfully");
     
    } catch (error) {
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response.data.message}`
      );
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreateUser();
      }}
      className=" md:px-10 lg:px-48 py-5 flex flex-col gap-5"
    >
      {inputBarList.map((el) => {
        return (
          <div className="flex" key={el.id}>
            <div className="font-semibold w-72 flex justify-center items-center bg-white rounded-md">
              {el.fieldName}
            </div>
            {el.option ? (
              <OptionComponent
                value={data[el.data]}
                onChange={(event) => {
                  handleChange(event, el.data);
                }}
                option={el.option}
              />
            ) : (
              <InputBar
                onChange={(event) => {
                  handleChange(event, el.data);
                }}
                value={data[el.data]}
                placeHolder={el.fieldName}
                type={el.type}
              ></InputBar>
            )}
          </div>
        );
      })}
      <SubmitButton width="w-full">Create User</SubmitButton>
    </form>
  );
}
