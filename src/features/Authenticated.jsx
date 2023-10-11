import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/auth-hook";

export default function Authenticated({ children, authWho }) {
  const { LoginUser } = useAuthContext();

  if (!LoginUser) {
    return <Navigate to={"/login"} />;
  }
  switch (authWho) {
    case "admin":
      if (LoginUser.userRole !== authWho) {
        return <Navigate to={"/"} />;
      }
      break;
    case "supervisor":
      if (LoginUser.userRole !== authWho && LoginUser.userRole !== "admin") {
        return <Navigate to={"/"} />;
      }
      break;
  }
  return children;
}
