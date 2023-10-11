import { useAuthContext } from "../../hooks/auth-hook";
import { Outlet } from "react-router-dom";
function WMSLayout() {
  const {LoginUser} = useAuthContext()
  console.log(LoginUser)
  return (
    <>
      <div>WMS DAAAAAAAAAAAAAAA</div>
      <span>{LoginUser.username} 参上！</span>
      <Outlet />
    </>
  );
}

export default WMSLayout;
