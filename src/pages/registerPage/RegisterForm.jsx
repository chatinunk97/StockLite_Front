import { useState } from "react";
import InputBar from "../../components/InputBar";
import SubmitButton from "../../components/SubmitButton";
import axios from "../../config/axios";
import Swal from "sweetalert2";
import {
  RegisterAdminSchema,
  validateLogin,
} from "../../validators/userValidator";

const inputList = [
  { id: "1", dataName: "firstName", label: "First name" },
  { id: "2", dataName: "lastName", label: "Last name" },
  { id: "3", dataName: "email", label: "Email" },
  { id: "4", dataName: "username", label: "Username" },
  { id: "5", dataName: "companyName", label: "Company name" },
  { id: "6", type: "password", dataName: "password", label: "Password" },
  {
    id: "7",
    placeHolder: "confirm password",
    type: "password",
    dataName: "repeat_password",
    label: "Confirm password",
  },
];
export default function RegisterForm() {
  const [registerInput, setRegisterInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    companyName: "",
    password: "",
    repeat_password: "",
  });
  const [registerError, setRegisterError] = useState(null);
  const handleInputChange = (event, field) => {
    setRegisterInput({ ...registerInput, [field]: event.target.value });
  };
  const handleSubmitSignUp = async () => {
    try {
      const validateResult = validateLogin(RegisterAdminSchema, registerInput);
      if (validateResult.error) {
        setRegisterError(validateResult.error);
        return;
      }
      await axios.post("/manage/admin", registerInput);
      Swal.fire(
        "Register Completed !",
        `Welcome aborad , ${registerInput.username}`,
        "success"
      );
      setRegisterError({});
    } catch (error) {
      console.log(error);
      Swal.fire("Login Failed", `${error.response.data.message}`, "error");
    }
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className="w-full flex flex-col items-start shadow-lg rounded-md py-5 px-2.5 gap-5 bg-blue-50"
    >
      {inputList.map((el) => (
        <div className="w-full" key={el.id}>
          {" "}
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {el.label}
          </label>
          <InputBar
          isError={registerError?.[el.dataName]}
            value={registerInput[el.dataName]}
            placeHolder={el.label}
            type={el.type}
            onChange={(event) => {
              handleInputChange(event, el.dataName);
            }}
          />
        </div>
      ))}
      <SubmitButton onClick={handleSubmitSignUp}>Sign up</SubmitButton>
    </form>
  );
}
