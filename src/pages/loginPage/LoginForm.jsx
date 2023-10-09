import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";

export default function LoginForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className="w-full flex flex-col items-center shadow-lg rounded-md py-5 px-2.5 gap-5 bg-blue-50"
    >
      <LoginInput placeHolder={"Email or username"} type="text" />
      <LoginInput placeHolder={"password"} type="password" />
      <LoginButton>Login</LoginButton>
    </form>
  );
}
