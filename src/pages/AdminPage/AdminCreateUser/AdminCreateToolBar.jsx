import { useAdminContext } from "../../../hooks/admin-hook";
import AdminCreateToolBarList from "./AdminCreateToolBarList";


export default function ToolBar() {
  const { createUserInput, setCreateUserInput,  } =
    useAdminContext();

 
  return (
    <div className="flex flex-col">
      <div className=" bg-smoothgray flex flex-col relative pt-5 lg:p-2 rounded-md">
        <AdminCreateToolBarList
          data={createUserInput}
          setData={setCreateUserInput}
        ></AdminCreateToolBarList>
      </div>
    </div>
  );
}
