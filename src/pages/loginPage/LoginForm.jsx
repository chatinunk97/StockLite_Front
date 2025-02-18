import { useState } from "react";
import InputBar from "../../components/InputBar";
import SubmitButton from "../../components/SubmitButton";
import { LoginSchema, validateLogin } from "../../validators/userValidator";
import { useAuthContext } from "../../hooks/auth-hook";
import { AlertNG } from "../../utils/sweetAlert";

export default function LoginForm() {
  const { loginFunction } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      setLoginError(null);
      const validateResult = validateLogin(LoginSchema, loginInput);
      if (validateResult.error) {
        setLoginError(validateResult.error);
        return;
      }
      await loginFunction(validateResult.value);
    } catch (error) {
      AlertNG(error.response.data.message);
    } finally {
      setIsLoading(false);
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
      <SubmitButton isLoading={isLoading} onClick={handleSubmitLogin}>
        Login
      </SubmitButton>
    </form>
  );
}
