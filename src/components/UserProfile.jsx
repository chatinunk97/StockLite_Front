import { useState } from "react";
import userIcon from "../assets/userIcon.png";
import Dropdown from "./Dropdown";
import { useEffect, useRef } from "react";
import { useAuthContext } from "../hooks/auth-hook";

export default function UserProfile({ LoginUser }) {
  const { logOutFunction } = useAuthContext();
  const { firstName, lastName } = LoginUser;
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
    <>
      <div
        ref={dropDownEl}
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col lg:flex-row justify-center items-center p-3 gap-2 px-10  cursor-pointer hover:bg-blue-300 hover:underline hover:text-white"
      >
        <img src={userIcon} className="w-10 md:w-24 lg:w-10"></img>
        <div className="hidden lg:block text-xl">{firstName}</div>
      </div>
      <Dropdown
        header={`${firstName} ${lastName}`}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        content={
          <div
            onClick={logOutFunction}
            className="hover:bg-gray-200 px-3 py-3 rounded-lg"
          >
            Logout
          </div>
        }
      />
    </>
  );
}
