import { Link } from "react-router-dom";
import SubMenuButton from "../../../components/SubMenuButton";
export default function StockSubBar() {
  return (
    <div className="bg-smoothgray flex flex-col lg:flex-row  items-center rounded-lg overflow-hidden p-5">
      <div className="flex w-full justify-center lg:gap-10 lg:px-10 rounded-lg overflow-hidden">
        <SubMenuButton path={"/stock/search"}>
          <Link to={"/wms/stock/search"} className="w-full h-full block p-4 ">
            Search stock
          </Link>
        </SubMenuButton>
        <SubMenuButton path={"/stock/edit"}>
          <Link to={"/wms/stock/edit"} className="w-full h-full block p-4 ">
            Add stock
          </Link>
        </SubMenuButton>
      </div>
    </div>
  );
}
