import { Outlet } from "react-router-dom";
import OrderSubBar from "./OrderSubBar";
import OrderDisplayBox from "./OrderDisplayBox";
import ModalPopup from "../../../components/ModalPopup";
import { useState } from "react";
import OrderEditForm from "./OrderEdit/OrderEditForm";
export default function OrderMainPage() {
  const [isModalOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex flex-col gap-5">
        <OrderSubBar />
        <Outlet />
        <OrderDisplayBox openModal={setIsOpen}/>
      </div>
      <div>
        {isModalOpen && (
          <ModalPopup
            title={"Edit Order Information"}
            setIsOpen={setIsOpen}
            open={isModalOpen}
            onClose={() => setIsOpen(false)}
          >

          <OrderEditForm onClose={setIsOpen}/>
          </ModalPopup>
        )}
      </div>
    </div>
  );
}
