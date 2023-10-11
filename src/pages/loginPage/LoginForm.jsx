import { useState } from "react";
import InputBar from "../../components/InputBar";
import SubmitButton from "../../components/SubmitButton";
import { LoginSchema, validateLogin } from "../../validators/userValidator";
import Swal from "sweetalert2";
import { useAuthContext } from "../../hooks/auth-hook";

export default function LoginForm() {
  const { loginFunction } = useAuthContext();
  const [loginInput, setLoginInput] = useState({
    usernameOrEmail: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(null);

  const handleInputChange = (event, field) => {
    setLoginInput({ ...loginInput, [field]: event.target.value });
  };

  const handleSubmitLogin = async () => {
    try {
      setLoginError(null);
      const validateResult = validateLogin(LoginSchema, loginInput);
      if (validateResult.error) {
        setLoginError(validateResult.error);
        return;
      }
      await loginFunction(validateResult.value);
    } catch (error) {
      Swal.fire("Login Failed", `${error.response.data.message}`, "error");
    }
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className="w-10/12 flex flex-col items-center shadow-lg rounded-md py-5 px-2.5 gap-5 bg-blue-50"
    >
      <InputBar
        value={loginInput.usernameOrEmail}
        placeHolder={"Email or username"}
        isError={loginError?.usernameOrEmail}
        onChange={(event) => {
          handleInputChange(event, "usernameOrEmail");
        }}
      />
      <InputBar
        value={loginInput.password}
        placeHolder={"password"}
        type="password"
        isError={loginError?.password}
        onChange={(event) => {
          handleInputChange(event, "password");
        }}
      />
      <SubmitButton onClick={handleSubmitLogin}>Login</SubmitButton>
    </form>
  );
}
