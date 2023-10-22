import { Link } from "react-router-dom";
import SubMenuButton from "../../../components/SubMenuButton";
export default function ShelfSubBar() {
  return (
    <div className="bg-smoothgray flex flex-col lg:flex-row  items-center rounded-lg overflow-hidden p-5">
      <div className="flex w-full justify-center lg:gap-10 lg:px-10 rounded-lg overflow-hidden">
        <SubMenuButton path={"/shelf/search"}>
          <Link to={"/wms/shelf/search"} className="w-full h-full block p-4 ">
            Search shelf
          </Link>
        </SubMenuButton>
        <SubMenuButton path={"/shelf/edit"}>
          <Link to={"/wms/shelf/edit"} className="w-full h-full block p-4 ">
            Add shelf
          </Link>
        </SubMenuButton>
      </div>
    </div>
  );
}
