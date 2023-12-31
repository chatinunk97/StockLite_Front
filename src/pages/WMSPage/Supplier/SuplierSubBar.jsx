import { Link } from "react-router-dom"
import SubMenuButton from "../../../components/SubMenuButton"
export default function SupllierSubBar() {

  return (
    <div className="bg-smoothgray flex flex-col lg:flex-row  items-center rounded-lg overflow-hidden p-5">
    <div className="flex w-full justify-center lg:gap-10 lg:px-10 rounded-lg overflow-hidden">
      <SubMenuButton path={"/supplier/search"}>
        <Link to={"/wms/supplier/search"} className="w-full h-full block p-4 ">
          Search Supplier
        </Link>
      </SubMenuButton>
      <SubMenuButton path={"/supplier/edit"}>
        <Link to={"/wms/supplier/edit"} className="w-full h-full block p-4 ">
          Add Supplier
        </Link>
      </SubMenuButton>

    </div>
  </div>
  )
}
