import { Link } from "react-router-dom";
import logo from "../../assets/stocklite_logo.png";
import MenuButton from "../../components/MenuButton";
import UserProfile from "../../components/UserProfile";

const menuList = [
  { id: 1, link: "pos", text: "POS" },
  { id: 2, link: "wms", text: "WMS" },
  { id: 3, link: "admin", text: "User Manager" },
];

export default function HomeBar({ LoginUser }) {
  const { userRole } = LoginUser;
  return (
    <div className="flex items-center  gap-5 bg-blue-200 ">
      <Link to={"/"}>
        <div className="py-3">
          <img src={logo} alt="stockLiteLogo" className="w-52" />
        </div>
      </Link>
      <div className="flex justify-between flex-grow h-full w-full ">
        {menuList.map((el) => {
          switch (el.link) {
            case "pos":
              return <MenuButton key={el.id} text={el.text} link={el.link}></MenuButton>
            case "wms":
              if (userRole === "admin" || userRole === "supervisor") {
                return <MenuButton key={el.id} text={el.text} link={el.link}></MenuButton>;
              }
              break;
            case "admin":
              if (userRole === "admin") {
                return <MenuButton key={el.id} text={el.text} link={el.link}></MenuButton>;
              }
              break;
          }
        })}
        <MenuButton text={"Contact Us"}></MenuButton>
        <UserProfile LoginUser={LoginUser} />
      </div>
    </div>
  );
}
