import { useAdminContext } from "../../../hooks/admin-hook";
import DisplayTable from "../../../components/DisplayTable";
import App from "../../../components/TestAG-grid";

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
  const adGridColumnFormat = [
    { field: "User ID" },
    { field: "username" },
    { field: "createdAt" },
    { field: "companyId" },
    { field: "firstName" },
    { field: "lastName" },
    { field: "userRole" },
  ];
  return (
    <div>
      <App data={searchUserResult} columnFormat={adGridColumnFormat} />
      <DisplayTable data={searchUserResult} columnFormat={columnFormat} />
    </div>
  );
}
