import { Outlet } from "react-router-dom";
import ModalPopup from "../../../components/ModalPopup";
import { useState } from "react";
import ShelfSubBar from "./ShelfSubBar";
import ShelfDisplayBox from "./ShelfDisplayBox";
import ShelfEditForm from "./ShelfEdit/ShelfEditForm";

export default function ShelfMainPage() {
  const [isModalOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex flex-col gap-5">
        <ShelfSubBar />
        <Outlet />
        <ShelfDisplayBox openModal={setIsOpen} />
      </div>
      <div>
        {isModalOpen && (
          <ModalPopup
            title={"Move Stock to shelf"}
            setIsOpen={setIsOpen}
            open={isModalOpen}
            onClose={() => setIsOpen(false)}
          >
            <ShelfEditForm onClose={setIsOpen} />
          </ModalPopup>
        )}
      </div>
    </div>
  );
}
