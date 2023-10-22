import { createContext } from "react";
import { AlertNotiSuc } from "../utils/sweetAlert";
import axios from "axios";
import { useState } from "react";
export const POSContext = createContext("initial context");

export default function POSContextProvider({ children }) {
  const [saleList, setSaleList] = useState([]);
  const [searchShelfInput, setSearchShelfInput] = useState("");
  const getShelfItemFunction = async () => {
    try {
      if (!searchShelfInput) {
        return;
      }
      const searchResult = await axios.get(
        `/wms/shelf?shelfItemId=${searchShelfInput}`
      );
      if (!searchResult.data.searchResult.length) {
        return;
      }
      for (let el in saleList) {
        if (saleList[el].shelfItemId === +searchShelfInput) {
          setSaleList((prev) => {
            const newArray = [...prev];
            newArray[el].quantity++;
            return newArray;
          });
          setSearchShelfInput("")
          return;
        }
      }
      const newArray = searchResult.data.searchResult.map((item) => ({
        shelfItemId: item.shelfItemId,
        productName: item.productStock.productName,
        pricePerUnit: item.productStock.pricePerUnit,
        quantity: 1,
      }));
      setSaleList((prev) => {
        return [...prev, ...newArray];
      });
      setSearchShelfInput("")
    } catch (error) {
      console.log(error);
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response?.data.message}`
      );
    }
  };

  const shareObj = {
    getShelfItemFunction,
    saleList,
    searchShelfInput,
    setSearchShelfInput,
  };
  return <POSContext.Provider value={shareObj}>{children}</POSContext.Provider>;
}
