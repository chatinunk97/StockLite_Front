import { useState } from "react";
import { createContext } from "react";

export const WMSContext = createContext();

export default function WMSContextProvider({ children }) {
  const [toolBarList, setToolBar] = useState([
    { id: 1, data: "supplierId", filterName: "Supplier ID", isOn: false },
    { id: 2, data: "supplierName", filterName: "Supplier name", isOn: true },
    {
      id: 3,
      data: "supplierAddress",
      filterName: "Supplier Address",
      isOn: false,
    },
    { id: 4, data: "supplierTel", filterName: "Supplier Tel", isOn: false },
  ]);

  const [searchInput, setSearchInput] = useState({
    supplierId: "",
    supplierName: "",
    supplierAddress: "",
    supplierTel: "",
  });
  const shareObj = { toolBarList, setToolBar, searchInput, setSearchInput };
  return <WMSContext.Provider value={shareObj}>{children}</WMSContext.Provider>;
}
