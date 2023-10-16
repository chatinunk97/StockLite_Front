import { useLocation } from "react-router-dom";

export default function SubMenuButton({ children, path }) {
  const mainPage = useLocation().pathname.split("/")[1];
  const menu = useLocation().pathname.split("/" + mainPage)[1];
  const pathMatch = menu.includes(path);
  return (
    <button
      className={`${
        pathMatch ? `bg-black` : `bg-hardgray`
      }  lg:rounded-lg text-2xl text-white w-full hover:bg-black font-semibold `}
    >
      {children}
    </button>
  );
}
