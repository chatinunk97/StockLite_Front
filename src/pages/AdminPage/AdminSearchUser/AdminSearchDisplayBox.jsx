import { useAdminContext } from "../../../hooks/admin-hook";
import DisplayTable from "../../../components/DisplayTable";

export default function AdminSearchDisplayBox() {
  const { searchUserResult } = useAdminContext();
  const columnFormat = [
    { key: "userId", name: "user ID" },
    { key: "username", name: "Username" },
    { key: "createdAt", name: "Created at" },
    { key: "companyId", name: "Company ID" },
    { key: "firstName", name: "First name" },
    { key: "lastName", name: "Last name" },
    { key: "userRole", name: "Role" },
  ];
  return (
    <div>
      <DisplayTable data={searchUserResult} columnFormat={columnFormat} />
    </div>
  );
}
