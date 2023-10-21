import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import date from "date-and-time";
import { AlertNotiSuc } from "../utils/sweetAlert";
export const WMSContext = createContext();

export default function WMSContextProvider({ children }) {
  //Supplier
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
  const [searchSupplierResult, setSearchSupplierResult] = useState([]);
  const [createSupplierInput, setCreateSupplierInput] = useState({
    supplierName: "",
    supplierAddress: "",
    supplierTel: "",
  });
  const [selectedSupplier, setSelectedSupplier] = useState({});

  const [editSupplierInput, setEditSupplierInput] = useState({
    supplierId: "",
    supplierName: "",
    supplierAddress: "",
    supplierTel: "",
    createdAt: "",
    updatedAt: "",
    companyId: "",
  });
  const createSupplierFunction = async () => {
    try {
      const result = await axios.post("/wms/supplier", createSupplierInput);
      const newSupplier = result.data.createResult;

      newSupplier.createdAt = date.transform(
        newSupplier.createdAt.split("T")[0],
        "YYYY-MM-DD",
        "DD MMM YYYY"
      );
      setSearchSupplierResult([newSupplier, ...searchSupplierResult]);
      AlertNotiSuc(
        "success",
        "New Supplier Created",
        `Supplier name : "${createSupplierInput.supplierName}" created`
      );
      setCreateSupplierInput({
        supplierName: "",
        supplierAddress: "",
        supplierTel: "",
      });
    } catch (error) {
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response.data.message}`
      );
    }
  };
  const searchSupplier = async (input) => {
    try {
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
    } catch (error) {
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response?.data.message}`
      );
    }
  };
  const editSupplierFunction = async (input) => {
    try {
      const result = await axios.patch("/wms/supplier", input);
      searchSupplier(searchInput);
      AlertNotiSuc(
        "success",
        "Change saved",
        `Supplier name "${result.data.data.supplierName}"'s data has been changed`
      );
    } catch (error) {
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response?.data.message}`
      );
    }
  };
  const deleteSupplierFunction = async (supplierId) => {
    try {
      await axios.delete(`/wms/supplier?supplierId=${supplierId}`);
      searchSupplier(searchInput).catch((error) => console.log(error));
      AlertNotiSuc(
        "success",
        "Supplier Deleted",
        `Deleted Supplier ID : "${supplierId}"`
      );
    } catch (error) {
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response?.data.message}`
      );
    }
  };

  //Order

  const [orderBar, setOrderBar] = useState([
    { id: 1, data: "username", filterName: "username", isOn: false },
    { id: 2, data: "orderId", filterName: "Order ID", isOn: true },
    {
      id: 3,
      data: "supplierId",
      filterName: "Supplier ID",
      isOn: false,
    },
    { id: 4, data: "sumPrice", filterName: "Total Expense", isOn: false },
    {
      id: 5,
      data: "startDate",
      filterName: "Date From",
      isOn: false,
      type: "date",
    },
    {
      id: 6,
      data: "endDate",
      filterName: "Date Until",
      isOn: false,
      type: "date",
    },
  ]);
  const [searchOrderInput, setSearchOrderInput] = useState({
    username: "",
    orderId: "",
    supplierId: "",
    sumPrice: "",
    startDate: "",
    endDate: "",
  });
  const [searchOrderResult, setSearchOrderResult] = useState([]);
  const searchOrderFunction = async (input) => {
    try {
      const { username, orderId, supplierId, sumPrice, startDate, endDate } =
        input;
      const result = await axios.get(
        `/wms/order?username=${username}&orderId=${orderId}&supplierId=${supplierId}&sumPrice=${sumPrice}&startDate=${startDate}&endDate=${endDate}`
      );
      if (result.data.searchResult.length) {
        const rawData = result.data.searchResult;
        //Map the data since the response is a nested Object
        const modifiedResponses = rawData.map((apiResponse) => ({
          orderId: apiResponse.orderId,
          receiveDate: apiResponse.receiveDate,
          sumPrice: apiResponse.sumPrice,
          userId: apiResponse.userId,
          supplierId: apiResponse.Supplier.supplierId,
          supplierName: apiResponse.Supplier.supplierName,
          createdAt: apiResponse.createdAt,
          updatedAt: apiResponse.updatedAt,
          username: apiResponse.User.username,
        }));
        for (let order of modifiedResponses) {
          order.receiveDate = date.transform(
            order.receiveDate.split("T")[0],
            "YYYY-MM-DD",
            "DD MMM YYYY"
          );
        }
        setSearchOrderResult(modifiedResponses);
        return;
      }
      setSearchOrderResult([]);
    } catch (error) {
      console.log(error);
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response?.data.message}`
      );
    }
  };
  const [selectedOrder, setSelectedOrder] = useState({});
  const deleteOrderFunction = async (input) => {
    try {
      const deletedOrder = await axios.delete(`/wms/order?orderId=${input}`);
      const deletedOrderInstance = deletedOrder.data.deletedOrder;
      setSearchOrderResult((prev) => {
        return prev.filter((el) => el.orderId !== deletedOrderInstance.orderId);
      });
      AlertNotiSuc(
        "success",
        "Change saved",
        `Order ID "${deletedOrderInstance.orderId}" deleted`
      );
    } catch (error) {
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response?.data.message}`
      );
    }
  };
  const [createOrderInput, setCreateOrderInput] = useState({
    supplierId: "",
    receiveDate: "",
    sumPrice: "",
  });
  const createOrderFunction = async () => {
    try {
      const createResult = await axios.post("/wms/order", createOrderInput);
      setCreateOrderInput({
        supplierId: "",
        receiveDate: "",
        sumPrice: "",
      });
      await searchOrderFunction(searchOrderInput);
      AlertNotiSuc(
        "success",
        "New Order Created",
        `Your order number is : "${createResult.data.createResult.orderId}"`
      );
    } catch (error) {
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response?.data.message}`
      );
    }
  };

  const [editOrderInput, setEditOrderInput] = useState({
    orderId: "",
    receiveDate: "",
    username: "",
    supplierName: "",
    sumPrice: "",
  });
  const editOrderFunction = async () => {
    try {
      console.log(editOrderInput.receiveDate);
      const result = await axios.patch("/wms/order", editOrderInput);
      AlertNotiSuc(
        "success",
        "Order Info updated",
        `Updated infor for Order number : "${result.data.editResult.orderId}"`
      );
    } catch (error) {
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response?.data.message}`
      );
    } finally {
      searchOrderFunction(searchOrderInput);
    }
  };

  // Stock
  const [stockBar, setStockBar] = useState([
    { id: 1, data: "stockId", filterName: "Stock ID", isOn: true },
    { id: 2, data: "orderId", filterName: "Order ID", isOn: false },
    {
      id: 3,
      data: "supplierName",
      filterName: "Supplier name",
      isOn: false,
    },
    { id: 4, data: "productName", filterName: "Product name", isOn: false },
    {
      id: 5,
      data: "stockQuantity",
      filterName: "Quantity",
      isOn: false,
    },
    {
      id: 6,
      data: "pricePerUnit",
      filterName: "Price per unit",
      isOn: false,
    },
    {
      id: 7,
      data: "expirationDate",
      filterName: "EXP date",
      isOn: false,
      type: "date",
    },
  ]);
  const [searchStockInput, setSearchStockInput] = useState({
    stockId: "",
    orderId: "",
    supplierName: "",
    productName: "",
    stockQuantity: "",
    pricePerUnit: "",
    expirationDate: "",
  });
  const [searchStockResult , setSearchStockResult] = useState([])
  const searchStockFunction = async (input) => {
    try {
      const {
        stockId,
        orderId,
        supplierName,
        productName,
        stockQuantity,
        pricePerUnit,
        expirationDate,
      } = input;
      const searchResult = await axios(
        `/wms/stock?${stockId}&orderId=${orderId}&supplierName=${supplierName}&productName=${productName}&stockQuantity=${stockQuantity}&pricePerUnit=${pricePerUnit}&expirationDate=${expirationDate}`
      );
      const flattenedResult = searchResult.data.result.map(item => ({
        supplierId: item.OrderList.Supplier.supplierId,
        supplierName: item.OrderList.Supplier.supplierName,
        ...item
      }));
      setSearchStockResult(flattenedResult)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    searchSupplier(searchInput).catch((error) => console.log(error));
    searchOrderFunction(searchOrderInput).catch((error) => console.log(error));
    searchStockFunction(searchStockInput).catch((error)=>console.log(error))
  }, []);
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
    selectedSupplier,
    setSelectedSupplier,
    editSupplierInput,
    setEditSupplierInput,
    editSupplierFunction,
    deleteSupplierFunction,
    orderBar,
    setOrderBar,
    searchOrderInput,
    setSearchOrderInput,
    searchOrderFunction,
    searchOrderResult,
    deleteOrderFunction,
    createOrderInput,
    setCreateOrderInput,
    createOrderFunction,
    setSelectedOrder,
    selectedOrder,
    editOrderInput,
    setEditOrderInput,
    editOrderFunction,
    stockBar,
    searchStockInput,
    setSearchStockInput,
    searchStockFunction,
    searchStockResult
  };

  return <WMSContext.Provider value={shareObj}>{children}</WMSContext.Provider>;
}
