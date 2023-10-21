import { Outlet } from "react-router-dom";
import StockSubBar from "./StockSubBar";
import StockDisplayBox from "./StockDisplayBox";
import ModalPopup from "../../../components/ModalPopup";
import { useState } from "react";
import StockEditForm from "./StockEdit/StockEditForm";

export default function StockMainPage() {
  const [isModalOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex flex-col gap-5">
        <StockSubBar />
        <Outlet />
        <StockDisplayBox openModal={setIsOpen} />
      </div>
      <div>
        {isModalOpen && (
          <ModalPopup
            title={"Edit Order Information"}
            setIsOpen={setIsOpen}
            open={isModalOpen}
            onClose={() => setIsOpen(false)}
          >
            <StockEditForm onClose={setIsOpen} />
          </ModalPopup>
        )}
      </div>
    </div>
  );
}
