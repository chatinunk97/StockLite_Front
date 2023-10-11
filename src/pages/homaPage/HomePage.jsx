
import HomeBar from "./HomeBar";
import HomeBody from "./HomeBody";
import { useAuthContext } from "../../hooks/auth-hook";
import { Outlet } from "react-router-dom";

function HomePage() {
  const { LoginUser } = useAuthContext();
  return (
    <div className="flex flex-col h-full">
      <HomeBar LoginUser={LoginUser} />
      <Outlet/>
    </div>
  );
}

export default HomePage;
