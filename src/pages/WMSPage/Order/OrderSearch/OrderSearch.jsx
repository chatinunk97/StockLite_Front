import OrderSearchToolBar from "./OrderSearchToolBar";

export default function OrderSearch() {
  return (
    <div className="flex flex-col">
      <div className=" bg-smoothgray flex flex-col relative pt-5 lg:p-2 rounded-md">
        <OrderSearchToolBar />
      </div>
    </div>
  );
}
