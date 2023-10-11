import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/auth-hook";

export default function RedirectIfAuthenticate({ children }) {
  const { LoginUser } = useAuthContext();

  if (LoginUser) {
    return <Navigate to={"/"} />;
  }
  return children;
}
