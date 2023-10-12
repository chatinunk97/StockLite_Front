import { AdminContext } from "../context/admin-context";
import { useContext } from "react";

export function useAdminContext() {
  return useContext(AdminContext);
}
