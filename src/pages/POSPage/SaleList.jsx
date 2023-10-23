import usePOSContext from "../../hooks/pos-hook";
import SaleItem from "./SaleItem";
export default function SaleList() {
  const { saleList, setSaleList, setItemCount, setSumSale } = usePOSContext();
  return (
    <div className="flex flex-col  bg-white   rounded-md shadow-md">
      <div className="bg-blue-100 w-full py-3 flex justify-center text-2xl font-bold shadow-md">
        Your Receipt
      </div>
      <div className="flex  bg-smoothgray font-semibold ">
        <div className=" ml-14 w-24 p-1 text-center">ID</div>
        <div className=" ml-36 w-20 p-1 text-center">Product</div>
        <div className=" ml-24 w-20 p-1 text-center">Quantity</div>
        <div className=" ml-14 w-20 p-1 text-center">THB</div>
      </div>
      <div className="flex flex-col p-5 gap-2">
        {saleList.map((el) => {
          return (
            <SaleItem
              key={el.shelfItemId}
              el={el}
              setSaleList={setSaleList}
              saleList={saleList}
              setSumSale={setSumSale}
              setItemCount={setItemCount}
            ></SaleItem>
          );
        })}
      </div>
    </div>
  );
}
