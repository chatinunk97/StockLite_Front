import { useAdminContext } from "../../../hooks/admin-hook";
import DisplayTable from "../../../components/DisplayTable";

export default function AdminSearchDisplayBox() {
  const { searchUserResult, setSelectedRow } = useAdminContext();
  const adGridColumnFormat = [
    { field: "userId", resizable: true },
    { field: "username" },
    { field: "createdAt" },
    { field: "firstName" },
    { field: "lastName" },
    { field: "userRole" },
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
