import SupplierSearchToolBar from "./SupplierSearchToolBar"
import SubmitButton from "../../../../components/SubmitButton"
export default function SupplierSearch() {
  return (
    <div className="flex flex-col">
    <div className=" bg-smoothgray flex flex-col relative pt-5 lg:p-2 rounded-md">
      <SupplierSearchToolBar
      ></SupplierSearchToolBar>
    </div>
    <SubmitButton width="w-full">
      Search
    </SubmitButton>
  </div>
  )
}
