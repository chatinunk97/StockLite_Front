import { Link } from "react-router-dom";
import SubMenuButton from "../../../components/SubMenuButton";
export default function OrderSubBar() {
  return (
    <div className="bg-smoothgray flex flex-col lg:flex-row  items-center rounded-lg overflow-hidden p-5">
      <div className="flex w-full justify-center lg:gap-10 lg:px-10 rounded-lg overflow-hidden">
        <SubMenuButton path={"/order/search"}>
          <Link to={"/wms/order/search"} className="w-full h-full block p-4 ">
            Search Order
          </Link>
        </SubMenuButton>
        <SubMenuButton path={"/order/edit"}>
          <Link to={"/wms/order/edit"} className="w-full h-full block p-4 ">
            Add Order
          </Link>
        </SubMenuButton>
      </div>
    </div>
  );
}
