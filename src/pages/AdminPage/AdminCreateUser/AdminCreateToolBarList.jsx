import React from "react";
import InputBar from "../../../components/InputBar";
import OptionComponent from "../../../components/OptionComponent";

export default function AdminCreateToolBarList({ data, setData }) {
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
  return (
    <div className="grid grid-cols-1 gap-2 p-5">
      {inputBarList.map((el) => {
        return (
          <div className="flex gap-2" key={el.id}>
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
    </div>
  );
}
