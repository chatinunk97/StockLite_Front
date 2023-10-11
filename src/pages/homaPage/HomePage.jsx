import { useAuthContext } from "../../hooks/auth-hook";
import { Outlet } from "react-router-dom";
import HomeBar from "./HomeBar";
function HomePage() {
  const { LoginUser } = useAuthContext();
  return (
    <>
    <HomeBar/>
      <div>HOME PAGE DAAAAAAAAAAAAAAA</div>
      <span>Username === {LoginUser.username}</span><br></br>
      <span>UserRole === {LoginUser.userRole}</span>
      
    </>
  );
}

export default HomePage;
