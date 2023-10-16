import { Link } from "react-router-dom";
import adminIcon from "../../assets/AdminPage/adminUserIcon.png";
import SubMenuButton from "../../components/SubMenuButton";

export default function AdminMenuBar() {
  return (
    <div className="bg-smoothgray flex flex-col lg:flex-row  items-center rounded-lg overflow-hidden ">
      <Link
        to={"/admin/search"}
        className="p-3 w-full lg:w-auto h-full bg-black flex gap-3 justify-center items-center  px-10 lg:py-2 cursor-pointe "
      >
        <img src={adminIcon} alt="adminIcon" className="w-24" />
        <span className="text-white text-2xl font-semibold">
          User Management
        </span>
      </Link>
      <div className="flex w-full justify-center lg:gap-10 lg:px-10">
        <SubMenuButton path={"/search"}>
          <Link to={"/admin/search"} className="w-full h-full block p-4 ">
            Search User
          </Link>
        </SubMenuButton>
        <SubMenuButton path={"/create"}>
          <Link to={"/admin/create"} className="w-full h-full block p-4 ">
            Create User
          </Link>
        </SubMenuButton>
        <SubMenuButton path={"/edit"}>
          <Link to={"/admin/edit"} className="w-full h-full block p-4 ">
            Edit User
          </Link>
        </SubMenuButton>
      </div>
    </div>
  );
}
