import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import date from "date-and-time";
import { AlertNotiSuc } from "../utils/sweetAlert";
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

  const searchSupplier = async (input) => {
    const { supplierId, supplierName, supplierAddress, supplierTel } = input;
    const result = await axios.get(
      `/wms/supplier?supplierId=${supplierId}&supplierName=${supplierName}&supplierAddress=${supplierAddress}&supplierTel=${supplierTel}`
    );
    for (let supplier of result.data.searchResult) {
      supplier.createdAt = date.transform(
        supplier.createdAt.split("T")[0],
        "YYYY-MM-DD",
        "DD MMM YYYY"
      );
    }
    setSearchSupplierResult(result.data.searchResult);
  };
  useEffect(() => {
    searchSupplier(searchInput).catch((error) => console.log(error));
  }, []);
  const [searchInput, setSearchInput] = useState({
    supplierId: "",
    supplierName: "",
    supplierAddress: "",
    supplierTel: "",
  });
  const [searchSupplierResult, setSearchSupplierResult] = useState([]);
  const [createSupplierInput, setCreateSupplierInput] = useState({
    supplierName: "",
    supplierAddress: "",
    supplierTel: "",
  });
  const createSupplierFunction = async () => {
    try {
      const result = await axios.post("/wms/supplier", createSupplierInput);
      console.log(result.data.createResult);
      setSearchSupplierResult([
        result.data.createResult,
        ...searchSupplierResult,
      ]);
      AlertNotiSuc(
        "success",
        "New Supplier Created",
        `Supplier name : "${createSupplierInput.supplierName}" created`
      );
    } catch (error) {
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response.data.message}`
      );
    }
  };

  const shareObj = {
    toolBarList,
    setToolBar,
    searchInput,
    setSearchInput,
    createSupplierInput,
    setCreateSupplierInput,
    searchSupplierResult,
    setSearchSupplierResult,
    searchSupplier,
    createSupplierFunction,
  };

  return <WMSContext.Provider value={shareObj}>{children}</WMSContext.Provider>;
}
