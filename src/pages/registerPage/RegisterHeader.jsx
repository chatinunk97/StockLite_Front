import { Link } from "react-router-dom";
import logo from "../../assets/stocklite_logo.png";
export default function RegisterHeader() {
  return (
    <Link
      to={"/login"}
      className="bg-gray-50 cursor-pointer flex flex-col items-center shadow-md rounded-md md:w-1/2
     justify-center"
    >
      <img src={logo} alt="stocklite_logo" className="w-72 md:w-96" />
    </Link>
  );
}
