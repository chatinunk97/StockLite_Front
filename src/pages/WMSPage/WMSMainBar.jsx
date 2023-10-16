import SubMenuButton from "../../components/SubMenuButton";
import { Link } from "react-router-dom";
import wmsIcon from "../../assets/WMSPage/wmsMenuIcon.png";
export default function WMSMainBar() {
  return (
    <div className="bg-smoothgray flex flex-col lg:flex-row  items-center rounded-lg overflow-hidden ">
      <Link
        to={"/wms"}
        className="p-3 w-full lg:w-auto h-full bg-black flex gap-3 justify-center items-center  px-10 lg:py-2 cursor-pointer "
      >
        <img src={wmsIcon} alt="wmsIcon" className="w-24" />
        <span className="text-white text-2xl font-semibold">
          Warehouse Management
        </span>
      </Link>
      <div className="flex w-full justify-center lg:gap-10 lg:px-10">
        <SubMenuButton path={"/supplier"}>
          <Link to={"/wms/supplier"} className="w-full h-full block p-4 ">
            Supplier
          </Link>
        </SubMenuButton>
        <SubMenuButton path={"/order"}>
          <Link to={"/wms/order"} className="w-full h-full block p-4 ">
            Order
          </Link>
        </SubMenuButton>
        <SubMenuButton path={"/stock"}>
          <Link to={"/wms/stock"} className="w-full h-full block p-4 ">
            Stock
          </Link>
        </SubMenuButton>
        <SubMenuButton path={"/shelf"}>
          <Link to={"/wms/shelf"} className="w-full h-full block p-4 ">
            Shelf
          </Link>
        </SubMenuButton>
      </div>
    </div>
  );
}
