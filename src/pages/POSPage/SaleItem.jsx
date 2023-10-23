export default function SaleItem({ el }) {
  return (
    <div className="flex  p-3 bg-blue-50 rounded-md">
      <div className=" mx-10 w-20 p-1 text-center">{el.shelfItemId}</div>
      <div className=" mx-10 w-60 overflow-hidden p-1 text-center">{el.productName}</div>
      <div className=" mx-10 w-10 p-1 text-center">{el.quantity}</div>
      <div className=" mx-10 w-10 p-1 text-center" >{el.quantity * el.pricePerUnit}</div>
    </div>
  );
}
