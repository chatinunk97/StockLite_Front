import ToolBar from "../../../components/ToolBar"
import AdminSearchDisplayBox from '../AdminSearchUser/AdminSearchDisplayBox'
import AdminCreateToolBar from "./AdminCreateToolBar"
export default function AdminCreateUser() {
  return (
    <div className="flex flex-col gap-5">
      <AdminCreateToolBar></AdminCreateToolBar>
      <AdminSearchDisplayBox/>
    </div>
  )
}
