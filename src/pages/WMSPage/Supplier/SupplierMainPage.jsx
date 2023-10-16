import { Outlet } from "react-router-dom";
import SupplierSubBar from "./SuplierSubBar";
import SupplierToolBar from "./SupplierToolBar";
import SupplierDisplayBox from './SupplierDisplayBox'
export default function SupplierMainPage() {
  return (
    <div className="flex flex-col gap-5">
        <SupplierSubBar/>
      <Outlet />
      <SupplierDisplayBox></SupplierDisplayBox>
    </div>
  );
}
