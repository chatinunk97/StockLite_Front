import { Link } from "react-router-dom";
import adminIcon from "../../assets/AdminPage/adminUserIcon.png";
import SubMenuButton from "../../components/SubMenuButton";

export default function AdminMenuBar() {
  return (
    <div className="bg-smoothgray flex r items-center">
      <div className="bg-black flex justify-center items-center rounded-lg px-10 py-2">
        <img src={adminIcon} alt="adminIcon" className="w-24" />
        <span className="text-white text-2xl font-semibold">
          User Management
        </span>
      </div>
      <div className="flex w-full justify-center gap-10 px-10">
        <SubMenuButton>
          {" "}
          <Link to={"/admin/create"} className="w-full h-full block p-4 ">
            Create User
          </Link>
        </SubMenuButton>
        <SubMenuButton>
          {" "}
          <Link to={"/admin/"} className="w-full h-full block p-4 ">
            Search User
          </Link>
        </SubMenuButton>
        <SubMenuButton>
          {" "}
          <Link to={"/admin/edit"} className="w-full h-full block p-4 ">
            Edit User
          </Link>
        </SubMenuButton>
      </div>
    </div>
  );
}
