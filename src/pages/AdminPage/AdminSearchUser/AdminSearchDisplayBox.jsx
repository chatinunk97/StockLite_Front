import { useAdminContext } from "../../../hooks/admin-hook";
import DisplayTable from "../../../components/DisplayTable";

export default function AdminSearchDisplayBox() {
  const { searchUserResult, setSelectedRow } = useAdminContext();
  const adGridColumnFormat = [
    { field: "userId", headerName: "ID" , width : 100},
    { field: "username", headerName: "Username" },
    { field: "createdAt", headerName: "Created Date" },
    { field: "firstName", headerName: "Firstname" },
    { field: "lastName", headerName: "Lastname" },
    { field: "userRole", headerName: "User Role" },
   
  ];
  return (
    <div>
      <DisplayTable
        data={searchUserResult}
        columnFormat={adGridColumnFormat}
        format={"userId"}
        setSelectedRow={setSelectedRow}
      />
    </div>
  );
}
