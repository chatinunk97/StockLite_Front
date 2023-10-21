import SupplierSearchToolBar from "./StockSearchToolBar";
export default function StockSearch() {
  return (
    <div className="flex flex-col">
      <div className=" bg-smoothgray flex flex-col relative pt-5 lg:p-2 rounded-md">
        <SupplierSearchToolBar></SupplierSearchToolBar>
      </div>
    </div>
  );
}
