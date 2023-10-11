import { Link } from "react-router-dom";
export default function MenuButton({ link, text }) {
  return (
    <Link
      to={link}
      className="w-full h-full flex items-center justify-center"
    >
      <button className="font-semibold hover:bg-blue-400 hover:text-white w-full h-full border border-gray-500 border-b-0 border-l-2 border-r-0 text-2xl border-t-0">
        {text}
      </button>
    </Link>
  );
}
