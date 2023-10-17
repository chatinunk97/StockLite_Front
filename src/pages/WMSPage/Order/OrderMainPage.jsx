import { Outlet } from "react-router-dom";
import OrderSubBar from "./OrderSubBar";
import OrderDisplayBox from "./OrderDisplayBox";
export default function OrderMainPage() {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <OrderSubBar />
        <Outlet />
        <OrderDisplayBox/>
      </div>
      <div>Modal Pop if isModalOpen is True</div>
    </div>
  );
}
