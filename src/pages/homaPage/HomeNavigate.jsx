import { Link } from "react-router-dom";

export default function HomeNavigate({ src, text, link }) {
  return (
    <Link
      to={link}
      className=" w-full max-w-lg h-auto bg-blue-50 shadow-lg p-6 rounded-xl flex flex-col gap-10 justify-center items-center hover:bg-blue-100 cursor-pointer flex-grow"
    >
      <img src={src} alt="" className="object-cover" />
      <span className="font-bold text-5xl">{text}</span>
    </Link>
  );
}
