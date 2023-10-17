import { useEffect } from "react";
import useWMSContext from "../../../hooks/wms-hook";
export default function OrderDisplayBox() {
  const { searchSupplier, searchSupplierResult } = useWMSContext();
  useEffect(() => {
    searchSupplier({
      supplierId: "",
      supplierName: "",
      supplierAddress: "",
      supplierTel: "",
    }).then(() => {
      console.log(searchSupplierResult);
    });
  }, []);
  return <div>OrderDisplayBox</div>;
}
