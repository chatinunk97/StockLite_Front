import { Outlet } from "react-router-dom";
import SupplierSubBar from "./SuplierSubBar";
import SupplierDisplayBox from "./SupplierDisplayBox";
import ModalPopup from "../../../components/ModalPopup";
import { useState } from "react";
import SupplierEditForm from "./SupplierEdit/SupplierEditForm";
export default function SupplierMainPage() {
  const [isModalOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-col gap-5">
        <SupplierSubBar />
        <Outlet />
        <SupplierDisplayBox openModal={setIsOpen}></SupplierDisplayBox>
      </div>
      <div>
        {isModalOpen && (
          <ModalPopup
            title={"Edit Supplier Information"}
            setIsOpen={setIsOpen}
            open={isModalOpen}
            onClose={() => setIsOpen(false)}
          >
            <SupplierEditForm onClose={setIsOpen} />
          </ModalPopup>
        )}
      </div>
    </div>
  );
}
