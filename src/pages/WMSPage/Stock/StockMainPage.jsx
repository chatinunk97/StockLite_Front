import { Outlet } from "react-router-dom";
import StockSubBar from "./StockSubBar";
import StockDisplayBox from "./StockDisplayBox";

export default function StockMainPage() {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <StockSubBar />
        <Outlet />
        <StockDisplayBox />
      </div>
      MODAL
    </div>
  );
}
