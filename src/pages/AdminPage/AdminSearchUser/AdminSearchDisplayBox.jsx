import { useAdminContext } from "../../../hooks/admin-hook";
import DisplayTable from "../../../components/DisplayTable";

export default function AdminSearchDisplayBox() {
  const { searchUserResult, setSelectedRow } = useAdminContext();
  const adGridColumnFormat = [
    { field: "userId", headerName: "ID" , width : 100},
    { field: "username", headerName: "Username",flex : 1 },
    { field: "createdAt", headerName: "Created Date",flex : 1 },
    { field: "firstName", headerName: "Firstname" ,flex : 1},
    { field: "lastName", headerName: "Lastname" ,flex : 1},
    { field: "userRole", headerName: "User Role",flex : 1 },
   
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
