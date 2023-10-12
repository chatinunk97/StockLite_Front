import { Outlet } from "react-router-dom";
import AdminMenuBar from "./AdminMenuBar";

export default function AdminMainPage() {
  return (
    <div className="py-5">
      <AdminMenuBar />
      <Outlet/>
    </div>
  );
}
