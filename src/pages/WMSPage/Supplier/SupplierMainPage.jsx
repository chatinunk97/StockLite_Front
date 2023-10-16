import { Outlet } from "react-router-dom";
import SupplierSubBar from "./SuplierSubBar";
import SupplierToolBar from "./SupplierToolBar";

export default function SupplierMainPage() {
  return (
    <div>
        <SupplierSubBar/>
      <Outlet />
    </div>
  );
}
