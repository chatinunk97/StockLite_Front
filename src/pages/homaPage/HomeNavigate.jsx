import { Link } from "react-router-dom";

export default function HomeNavigate({ src, text, link }) {
  return (
    <Link
      to={link}
      className="flex md:flex-col max-w-sm md:max-w-5xl max-h-96  justify-center items-center gap-5 bg-blue-50 hover:bg-blue-100 w-full  p-5 shadow-md rounded-md"
    >
      <img src={src} alt="" className="object-cover w-20 md:w-44" />
      <span className="font-bold text-5xl">{text}</span>
    </Link>
  );
}

