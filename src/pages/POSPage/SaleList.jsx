import usePOSContext from "../../hooks/pos-hook";
export default function SaleList() {
  const { saleList } = usePOSContext();
  return (
    <div>
      {saleList.map((el) => {
        return (
          <h1 key={el.shelfItemId}>
            ID : {el.shelfItemId} Product : {el.productName} PPU :{" "}
            {el.pricePerUnit} Quantity : {el.quantity}
          </h1>
        );
      })}
    </div>
  );
}
