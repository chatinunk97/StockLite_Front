import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export default function MenuButton({ link, text }) {
  const { pathname } = useLocation();
  const pathMatch = (pathname.includes(link))
  return (
    <Link
      to={link}
      className={`flex items-center hover:bg-gray-200  rounded-md px-3 py-2 w-full
      md:hover:bg-blue-300 md:text-black md:font-semibold  md:shadow-md md:justify-center
        lg:rounded-none  lg:shadow-none
        ${pathMatch ? "bg-blue-50 border-b-8 border-b-blue-100" : ""}
      `}
    >
      <span className="font-semibold">{text}</span>
    </Link>
  );
}
