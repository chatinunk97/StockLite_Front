import React from "react";
import { useAuthContext } from "../../hooks/auth-hook";
export default function HomeBar() {
    const {logOutFunction} = useAuthContext()
  return (
    <div className="flex gap-5 bg-blue-800">
      <div>Logo</div>
      <div>WMS</div>
      <div>POS</div>
      <div>User Manager</div>
      <div>Contact Us</div>
      <div onClick={logOutFunction}>Log Out</div>
    </div>
  );
}
