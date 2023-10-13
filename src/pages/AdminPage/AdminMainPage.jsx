import { Outlet } from "react-router-dom";
import AdminMenuBar from "./AdminMenuBar";
import AdminContextProvider from "../../context/admin-context";

export default function AdminMainPage() {
  return (
    <AdminContextProvider>
      <div className="py-5 flex flex-col gap-10 bg-blue-50 rounded-md px-4">
        <AdminMenuBar />
        <Outlet />
      </div>
    </AdminContextProvider>
  );
}
