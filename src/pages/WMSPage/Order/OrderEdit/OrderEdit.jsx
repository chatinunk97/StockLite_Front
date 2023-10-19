import OrderToolBar from "./OrderToolBar";

export default function OrderEdit() {
  return (
    <div className="flex flex-col">
      <div className=" bg-smoothgray flex flex-col relative pt-5 lg:p-2 rounded-md">
        <OrderToolBar />
      </div>
    </div>
  );
}
