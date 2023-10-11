import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export default function MenuButton({ link, text }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={link}
      className="flex items-center hover:bg-gray-200  rounded-md px-3 py-3 w-full
      md:bg-blue-100 md:hover:bg-blue-300 md:text-black md:font-semibold  md:shadow-md md:justify-center
        lg:rounded-none lg:shadow-none
      "
    >
      <span className="font-semibold">{text}</span>
    </Link>
  );
}
