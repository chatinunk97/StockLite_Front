import usePOSContext from "../../hooks/pos-hook";

export default function SumDisplay() {
  const { itemCount, sumSale, makeOrderFunction } = usePOSContext();

  return (
    <div className="flex flex-col gap-5 rounded-md  shadow-md">
      <div className="bg-white  flex flex-col items-center rounded-md">
        <div className="bg-blue-500 text-white w-full py-3 flex justify-center text-2xl font-bold shadow-md">
          Your Order
        </div>
        <div className="p-5 px-20 flex justify-between  w-full">
          <div className="text-xl font-semibold bg-blue-50 p-3 rounded-md">Items : {itemCount} pcs</div>
          <div className="text-xl font-semibold bg-blue-50 p-3 rounded-md text-red-700">Total : {sumSale} THB</div>
        </div>
      </div>

      <button
        onClick={makeOrderFunction}
        className="bg-waterred hover:bg-waterredHover p-3 rounded-md text-white font-bold"
      >
        {" "}
        MAKE ORDER{" "}
      </button>
    </div>
  );
}
