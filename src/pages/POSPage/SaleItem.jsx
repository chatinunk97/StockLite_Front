export default function SaleItem({
  el,
  saleList,
  setSaleList,
  setItemCount,
  setSumSale,
}) {
  const handleQuantityChange = (input) => {
    const newSaleList = [...saleList];
    const foundItem = newSaleList.findIndex(
      (item) => item.shelfItemId === el.shelfItemId
    );
    if (input) {
      newSaleList[foundItem].quantity = newSaleList[foundItem].quantity + 1;
      setItemCount((prev) => prev + 1);
      setSumSale((prev) => prev + newSaleList[foundItem].pricePerUnit);
    } else {
      newSaleList[foundItem].quantity = newSaleList[foundItem].quantity - 1;
      setItemCount((prev) => prev - 1);
      const ppu = newSaleList[foundItem].pricePerUnit;
      setSumSale((prev) => {
        const result = +prev - +ppu;
        if (!result) {
          return 0;
        }
        return result;
      });
      if (newSaleList[foundItem].quantity < 1) {
        newSaleList.splice(foundItem, 1);
      }
    }
    setSaleList(newSaleList);
  };
  return (
    <div className="flex  p-3 bg-blue-50 rounded-md justify-center items-center">
      <div className=" mx-10 w-20 p-1 text-center">{el.shelfItemId}</div>
      <div className=" mx-10 w-60 overflow-hidden p-1 text-center">
        {el.productName}
      </div>
      <div className="flex bg-white mx-10  p-1 justify-center items-center text-center gap-5 rounded-md shadow-md">
        <div
          onClick={() => {
            handleQuantityChange(false);
          }}
          className="text-2xl cursor-pointer"
        >
          -
        </div>
        <div className="text-2xl text-blue-800">{el.quantity}</div>
        <div
          onClick={() => {
            handleQuantityChange(true);
          }}
          className="text-2xl cursor-pointer"
        >
          +
        </div>
      </div>
      <div className=" mx-10 w-10 p-1 text-center">
        {el.quantity * el.pricePerUnit}
      </div>
    </div>
  );
}
