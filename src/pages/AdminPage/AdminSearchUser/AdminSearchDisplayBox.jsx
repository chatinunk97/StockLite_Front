import { useAdminContext } from "../../../hooks/admin-hook";

export default function AdminSearchDisplayBox() {
  const { searchUserResult } = useAdminContext();
  return (
    <div>
      {searchUserResult.map((el) => (
        <h1 key={el.userId}>{el.firstName}</h1>
      ))}
    </div>
  );
}
