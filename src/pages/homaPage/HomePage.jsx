import HomeBar from "./HomeBar";
import { useAuthContext } from "../../hooks/auth-hook";
import { Outlet } from "react-router-dom";

function HomePage() {
  const { LoginUser } = useAuthContext();
  return (
    <div className="flex flex-col h-full lg:max-w-1/8 m-auto">
      <HomeBar LoginUser={LoginUser} />
      <Outlet />
    </div>
  );
}

export default HomePage;
