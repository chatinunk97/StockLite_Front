import { useState } from "react";
import userIcon from "../assets/userIcon.png";
import UserDropdown from "./UserDropdown";
import { useEffect, useRef } from "react";
export default function UserProfile({ LoginUser }) {
  const { firstName } = LoginUser;
  const [isOpen, setIsOpen] = useState(false);
  const dropDownEl = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropDownEl.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropDownEl}
      onClick={() => setIsOpen(!isOpen)}
      className=" border-t-0 relative font-bold  cursor-pointer flex justify-center items-center w-full h-full border border-gray-500 border-b-0 border-l-2 border-r-0 text-2xl"
    >
      <div className="px-2  hover:text-white w-full h-full flex justify-center items-center gap-4 hover:underline  hover:bg-blue-400">
        <div>
          <img src={userIcon} className="w-12"></img>
        </div>
        {firstName}
      </div>
      <UserDropdown
        header={"User menu"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}
