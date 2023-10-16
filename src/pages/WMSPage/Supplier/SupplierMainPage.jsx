import { Outlet } from "react-router-dom";
import SupplierSubBar from "./SuplierSubBar";
import SupplierDisplayBox from "./SupplierDisplayBox";
import ModalPopup from "../../../components/ModalPopup";
import { useState } from "react";
import SupplierEditForm from "./SupplierEdit/SupplierEditForm";
export default function SupplierMainPage() {
  const [isModalOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <ModalPopup title={"Edit Supplier Information"} open={isModalOpen} onClose={() => setIsOpen(false)}>
          <SupplierEditForm  onClose={setIsOpen} />
        </ModalPopup>
      </div>
      <SupplierSubBar />
      <Outlet />
      <SupplierDisplayBox openModal={setIsOpen}></SupplierDisplayBox>
    </div>
  );
}
