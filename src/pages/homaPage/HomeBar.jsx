import logo from "../../assets/stocklite_logo.png";
import MenuButton from "../../components/MenuButton";
import UserProfile from "../../components/UserProfile";
export default function HomeBar({LoginUser}) {

  return (
    <div className="flex items-center  gap-5 bg-blue-200 ">
      <div className="py-3">
        <img src={logo} alt="stockLiteLogo" className="w-52" />
      </div>
      <div className="flex justify-between flex-grow h-full w-full ">
        <MenuButton>POS</MenuButton>
        <MenuButton>WMS</MenuButton>
        <MenuButton>User manager</MenuButton>
        <MenuButton>ContactUs</MenuButton>
        <UserProfile LoginUser={LoginUser}/>
      </div>
    </div>
  );
}
