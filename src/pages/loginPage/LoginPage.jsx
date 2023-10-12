import LoginHeader from "./LoginHeader";
import icon from "../../assets/stocklite_icon2.jpg";
import RegisterButton from "./RegisterButton";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/auth-hook";
// import { Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  const { LoginUser } = useAuthContext();

  // if (LoginUser) {
  //   return <Navigate to={"/"} />;
  // }
  return (
    <div
      className="px-4 gap-4 py-8 flex flex-col  items-center bg-gray-50 w-full h-full m-auto 
      min-w-[400px]
      md:flex-row
    lg:max-w-1/8"
    >
      <LoginHeader />
      <div className="flex flex-col w-full justify-center items-center gap-3">
        <div>
          <img src={icon} alt="login_page_icon" className="w-72 " />
        </div>
        <LoginForm />
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300" />
        <Link to="/register">
          <RegisterButton>Level up your SME today</RegisterButton>
        </Link>
      </div>
    </div>
  );
}
