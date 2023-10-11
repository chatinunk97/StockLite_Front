import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/auth-hook";

export default function Authenticated({ children }) {
  const { LoginUser } = useAuthContext();

  if (!LoginUser) {
    return <Navigate to={"/login"} />;
  }
  return children;
}
