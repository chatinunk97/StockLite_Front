import { useLocation } from "react-router-dom";

export default function SubMenuButton({ children, path }) {
  const pathMatch = useLocation().pathname.split("/admin")[1] === path;
  return (
    <button
      className={`${
        pathMatch ? `bg-black` : `bg-hardgray`
      } rounded-lg text-2xl text-white w-full hover:bg-black font-semibold  `}
    >
      {children}
    </button>
  );
}
