import { AuthContext } from "../context/auth-context";
import { useContext } from "react";

export function useAuthContext() {
  return useContext(AuthContext);
}
