import { createContext } from "react";
import { AlertNotiSuc } from "../utils/sweetAlert";
import axios from "axios";
import { useState } from "react";
import useSound from "use-sound";
import beepSound from "../assets/POS/beepSound.mp3";
export const POSContext = createContext("initial context");

export default function POSContextProvider({ children }) {
  const [saleList, setSaleList] = useState([]);
  const [playSound] = useSound(beepSound);
  const [itemCount, setItemCount] = useState(0);
  const [sumSale, setSumSale] = useState(0);
  const [searchShelfInput, setSearchShelfInput] = useState("");
  const getShelfItemFunction = async () => {
    try {
      if (!searchShelfInput) {
        return;
      }
      const searchResult = await axios.get(
        `/pos/shelf?shelfItemId=${searchShelfInput}`
      );
      if (!searchResult.data.searchResult.length) {
        return;
      }
      for (let el in saleList) {
        if (saleList[el].shelfItemId === +searchShelfInput) {
          setSaleList((prev) => {
            const newArray = [...prev];
            newArray[el].quantity++;
            setSumSale(sumSale + newArray[el].pricePerUnit);
            return newArray;
          });
          playSound();
          setItemCount(itemCount + 1);
          setSearchShelfInput("");
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
      playSound();
      setItemCount(itemCount + 1);
      setSumSale(sumSale + newArray[0].pricePerUnit);
      setSearchShelfInput("");
    } catch (error) {
      console.log(error);
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response?.data.message}`
      );
    }
  };
  const makeOrderFunction = async () => {
    try {
      if(!saleList.length){
        AlertNotiSuc(
          "error",
          "No product found",
          "Please input atleast 1 product before making order"
        );
        return
      }
      const transformedArray = saleList.map((item) => {
        return {
          quantity: item.quantity,
          productShelf: {
            connect: {
              shelfItemId: item.shelfItemId,
            },
          },
        };
      });
  
      const result =  transformedArray ;
      const input = { sumSale, item: result };
      const orderResult = await axios.post('/pos/transaction',input)
      AlertNotiSuc(
        "success",
        "Order Made",
        `Your Order is  : "${orderResult.data.createResult.transactionId}"`
      );
      setItemCount(0)
      setSaleList([])
      setSumSale(0)
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
    itemCount,
    sumSale,
    makeOrderFunction,
  };
  return <POSContext.Provider value={shareObj}>{children}</POSContext.Provider>;
}
