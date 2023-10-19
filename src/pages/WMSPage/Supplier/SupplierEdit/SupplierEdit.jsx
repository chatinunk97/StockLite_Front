import SupplierEditToolBar from "./SupplierEditToolBar";
export default function SupplierEdit() {
  return (
    <div className="flex flex-col">
      <div className=" bg-smoothgray flex flex-col relative pt-5 lg:p-2 rounded-md">
        <SupplierEditToolBar />
      </div>
    </div>
  );
}
