import { useState } from "react";
import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";

export default function LoginForm() {
  const [loginInput, setLoginInput] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const handleInputChange = (event, field) => {
    setLoginInput({ ...loginInput, [field]: event.target.value });
  };

  const handleSubmitLogin = () => {
    console.log(loginInput);
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className="w-10/12 flex flex-col items-center shadow-lg rounded-md py-5 px-2.5 gap-5 bg-blue-50"
    >
      <LoginInput
        value={loginInput.usernameOrEmail}
        placeHolder={"Email or username"}
        type="text"
        onChange={(event) => {
          handleInputChange(event, "usernameOrEmail");
        }}
      />
      <LoginInput
        value={loginInput.password}
        placeHolder={"password"}
        type="password"
        onChange={(event) => {
          handleInputChange(event, "password");
        }}
      />
      <LoginButton onClick={handleSubmitLogin}>Login</LoginButton>
    </form>
  );
}
