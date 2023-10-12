import adminIcon from "../../assets/AdminPage/adminUserIcon.png";
import SubMenuButton from "../../components/SubMenuButton";

export default function AdminMenuBar() {
  return (
    <div className="bg-smoothgray flex r items-center">
      <div className="bg-black flex justify-center items-center rounded-lg px-4 py-2">
        <img src={adminIcon} alt="adminIcon" className="w-24" />
        <span className="text-white text-2xl font-semibold">
          User Management
        </span>
      </div>
      <div className="flex gap-4">
        <SubMenuButton>Create User</SubMenuButton>
        <SubMenuButton>Search User</SubMenuButton>
        <SubMenuButton>Edit User Info</SubMenuButton>
      </div>
    </div>
  );
}
