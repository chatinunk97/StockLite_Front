import { Outlet } from "react-router-dom";
import WMSContextProvider from "../../context/wms-context";
import WMSMainBar from "./WMSMainBar";

export default function WMSHomePage() {
  return (
    <WMSContextProvider>
      <div className="py-5 flex flex-col gap-10 bg-blue-50 rounded-md px-4 min-w-[768px]">
        <WMSMainBar />
        <Outlet />
      </div>
    </WMSContextProvider>
  );
}
