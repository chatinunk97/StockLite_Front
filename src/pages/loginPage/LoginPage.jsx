import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";
import icon from "../../assets/stocklite_icon2.jpg";
import RegisterButton from "./RegisterButton";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="px-4 py-8 flex flex-col gap-5 items-center bg-gray-50 w-full">
      <LoginHeader />
      <div>
        <img src={icon} alt="login_page_icon" className="w-72" />
      </div>
      <LoginForm />
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300" />
      <Link to="/register">
        <RegisterButton>Level up your SME today</RegisterButton>
      </Link>
    </div>
  );
}
