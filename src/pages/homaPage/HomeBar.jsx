import { Link } from "react-router-dom";
import menuIcon from "../../assets/menuIcon.png";
import logo from "../../assets/stocklite_logo.png";
import MenuButton from "../../components/MenuButton";
import UserProfile from "../../components/UserProfile";
import Dropdown from "../../components/Dropdown";
import { useState, useEffect, useRef } from "react";

const menuList = [
  { id: 1, link: "/pos", text: "POS" },
  { id: 2, link: "/wms", text: "WMS" },
  { id: 3, link: "/admin", text: "User Manager" },
];

export default function HomeBar({ LoginUser }) {
  const { userRole } = LoginUser;
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
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center h-full hover:bg-blue-300 px-2">
        <Link to={"/"}>
          <img src={logo} alt="stockLiteLogo" className="w-60 md:w-80 lg:w-56" />
        </Link>
      </div>
      <div className="hidden  md:grid md:grid-cols-2 gap-3 lg:flex w-full md:p-5 lg:p-0 lg:gap-0 lg:h-full">
        {menuList.map((el) => {
          switch (el.link) {
            case "/pos":
              return (
                <MenuButton
                  key={el.id}
                  text={el.text}
                  link={el.link}
                ></MenuButton>
              );
            case "/wms":
              if (userRole === "admin" || userRole === "supervisor") {
                return (
                  <MenuButton
                    key={el.id}
                    text={el.text}
                    link={el.link}
                  ></MenuButton>
                );
              }
              break;
            case "/admin":
              if (userRole === "admin") {
                return (
                  <MenuButton
                    key={el.id}
                    text={el.text}
                    link={el.link}
                  ></MenuButton>
                );
              }
              break;
          }
        })}
        <MenuButton text={"Contact Us"}></MenuButton>
      </div>

      {/*Drop down for phone view*/}
      <div className=" px-3 relative flex justify-center items-center gap-3 md:hidden justify-self-end cursor-pointer">
        <img
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          ref={dropDownEl}
          src={menuIcon}
          alt="menuIcon"
          className="h-12"
        />
        <div>
          <Dropdown
            header={"Menu"}
            isOpen={isOpen}
            content={menuList.map((el) => {
              switch (el.link) {
                case "/pos":
                  return (
                    <MenuButton
                      key={el.id}
                      text={el.text}
                      link={el.link}
                    ></MenuButton>
                  );
                case "/wms":
                  if (userRole === "admin" || userRole === "supervisor") {
                    return (
                      <MenuButton
                        key={el.id}
                        text={el.text}
                        link={el.link}
                      ></MenuButton>
                    );
                  }
                  break;
                case "/admin":
                  if (userRole === "admin") {
                    return (
                      <MenuButton
                        key={el.id}
                        text={el.text}
                        link={el.link}
                      ></MenuButton>
                    );
                  }
                  break;
              }
            })}
          />
        </div>
      </div>
      <UserProfile LoginUser={LoginUser} isOpen={isOpen} />
    </div>
  );
}
