
import HomeBar from "./HomeBar";
import HomeBody from "./HomeBody";
import { useAuthContext } from "../../hooks/auth-hook";

function HomePage() {
  const { LoginUser } = useAuthContext();
  return (
    <div className="flex flex-col h-full">
      <HomeBar LoginUser={LoginUser} />
      <HomeBody LoginUser={LoginUser} />
    </div>
  );
}

export default HomePage;
