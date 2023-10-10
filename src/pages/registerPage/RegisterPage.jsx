import RegisterForm from "./RegisterForm";
import RegisterHeader from "./RegisterHeader";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="px-4 py-8 flex flex-col gap-5 items-center bg-gray-50 w-full">
      <RegisterHeader />
      <RegisterForm />
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300" />
      <Link to={"/login"}>
        <span className="font-semibold hover:underline cursor-pointer">
          Already have an account ? Login
        </span>
      </Link>
    </div>
  );
}
