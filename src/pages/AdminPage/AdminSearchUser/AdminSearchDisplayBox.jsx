import { useAdminContext } from "../../../hooks/admin-hook";
import DisplayTable from "../../../components/DisplayTable";

export default function AdminSearchDisplayBox() {
  const { searchUserResult, setSelectedRow } = useAdminContext();
  const adGridColumnFormat = [
    { field: "userId", headerName: "ID", width: 100, sortable: true },
    { field: "username", headerName: "Username", flex: 1, sortable: true },
    { field: "createdAt", headerName: "Created Date", flex: 1, sortable: true },
    { field: "firstName", headerName: "Firstname", flex: 1, sortable: true },
    { field: "lastName", headerName: "Lastname", flex: 1, sortable: true },
    { field: "userRole", headerName: "User Role", flex: 1, sortable: true },
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
