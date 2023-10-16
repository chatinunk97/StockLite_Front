import SubmitButton from "../../../../components/SubmitButton";
import SupplierEditToolBar from "./SupplierEditToolBar";
import useWMSContext from "../../../../hooks/wms-hook";
export default function SupplierEdit() {
  const { createSupplierFunction } = useWMSContext();

  return (
    <div className="flex flex-col">
      <div className=" bg-smoothgray flex flex-col relative pt-5 lg:p-2 rounded-md">
        <SupplierEditToolBar />
      </div>
      <SubmitButton onClick={createSupplierFunction} width="w-full">
        Create Supplier
      </SubmitButton>
    </div>
  );
}
