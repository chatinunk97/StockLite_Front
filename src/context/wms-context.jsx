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
    {
      id: 1,
      data: "supplierId",
      filterName: "Supplier ID",
      isOn: false,
      type: "number",
    },
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
    {
      id: 2,
      data: "orderId",
      filterName: "Order ID",
      isOn: true,
      type: "number",
    },
    {
      id: 3,
      data: "supplierId",
      filterName: "Supplier ID",
      isOn: false,
      type: "number",
    },
    {
      id: 4,
      data: "sumPrice",
      filterName: "Total Expense",
      isOn: false,
      type: "number",
    },
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
      setCreateOrderInput((prev) => {
        return { ...prev, receiveDate: "", sumPrice: "" };
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
      if (editOrderInput.receiveDate === selectedOrder.receiveDate) {
        delete editOrderInput.receiveDate;
      }
      const result = await axios.patch("/wms/order", editOrderInput);
      AlertNotiSuc(
        "success",
        "Order Info updated",
        `Updated info for Order number : "${result.data.editResult.orderId}"`
      );
    } catch (error) {
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response?.data.message}`
      );
    } finally {
      searchOrderFunction(searchOrderInput);
      setEditOrderInput({
        orderId: "",
        receiveDate: "",
        username: "",
        supplierName: "",
        sumPrice: "",
      });
    }
  };

  // Stock
  const [stockBar, setStockBar] = useState([
    {
      id: 1,
      data: "stockId",
      filterName: "Stock ID",
      isOn: true,
      type: "number",
    },
    {
      id: 2,
      data: "orderId",
      filterName: "Order ID",
      isOn: false,
      type: "number",
    },
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
      type: "number",
    },
    {
      id: 6,
      data: "pricePerUnit",
      filterName: "Price per unit",
      isOn: false,
      type: "number",
    },
    {
      id: 7,
      data: "expirationDate",
      filterName: "EXP date before",
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
  const [searchStockResult, setSearchStockResult] = useState([]);
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
        `/wms/stock?stockId=${stockId}&orderId=${orderId}&supplierName=${supplierName}&productName=${productName}&stockQuantity=${stockQuantity}&pricePerUnit=${pricePerUnit}&expirationDate=${expirationDate}`
      );
      const flattenedResult = searchResult.data.result.map((item) => ({
        supplierId: item.OrderList.Supplier.supplierId,
        supplierName: item.OrderList.Supplier.supplierName,
        ...item,
      }));
      for (let order of flattenedResult) {
        if (order.expirationDate) {
          order.expirationDate = date.transform(
            order.expirationDate.split("T")[0],
            "YYYY-MM-DD",
            "DD MMM YYYY"
          );
        }
      }
      setSearchStockResult(flattenedResult);
    } catch (error) {
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response?.data.message}`
      );
    }
  };
  const [createStockInput, setCreateStockInput] = useState({
    orderId: "",
    productName: "",
    stockQuantity: "",
    pricePerUnit: "",
    expirationDate: "",
  });
  const stockCreateFunction = async () => {
    try {
      const createResult = await axios.post("/wms/stock", createStockInput);
      searchStockFunction(searchStockInput);
      setCreateStockInput((prev) => {
        return {
          ...prev,
          productName: "",
          stockQuantity: "",
          pricePerUnit: "",
          expirationDate: "",
        };
      });
      AlertNotiSuc(
        "success",
        "New Stock Created",
        `Your Stock number is : "${createResult.data.createResult.stockId}"`
      );
    } catch (error) {
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response?.data.message}`
      );
    }
  };
  const deleteStockFunction = async (input) => {
    try {
      const deletedStock = await axios.delete(`/wms/stock?stockId=${input}`);
      const deletedStockInstance = deletedStock.data.deletedStock;
      setSearchStockResult((prev) => {
        return prev.filter((el) => el.stockId !== deletedStockInstance.stockId);
      });
      AlertNotiSuc(
        "success",
        "Change saved",
        `Order ID "${deletedStockInstance.stockId}" deleted`
      );
    } catch (error) {
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response?.data.message}`
      );
    }
  };
  const [editStockInput, setEditStockInput] = useState({
    supplierName: "",
    stockId: "",
    productName: "",
    stockQuantity: "",
    pricePerUnit: "",
    expirationDate: "",
  });
  const [selectedStock, setSelectedStock] = useState({});
  const editStockFunction = async () => {
    try {
      if (editStockInput.expirationDate === selectedStock.expirationDate) {
        delete editStockInput.expirationDate;
      }
      const result = await axios.patch("/wms/stock", editStockInput);
      AlertNotiSuc(
        "success",
        "Stock Info updated",
        `Updated info for Stock number : "${result.data.editResult.stockId}"`
      );
    } catch (error) {
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response?.data.message}`
      );
    } finally {
      searchStockFunction(searchStockInput);
      setEditStockInput({
        supplierName: "",
        stockId: "",
        productName: "",
        stockQuantity: "",
        pricePerUnit: "",
        expirationDate: "",
      });
    }
  };

  //Shelf
  const [searchShelfResult, setSearchShelfResult] = useState([]);
  const [shelfBar, setShelfBar] = useState([
    {
      id: 1,
      data: "shelfItemId",
      filterName: "Shelf ID",
      isOn: true,
      type: "number",
    },
    {
      id: 2,
      data: "stockId",
      filterName: "Stock ID",
      isOn: false,
      type: "number",
    },
    { id: 3, data: "productName", filterName: "PropductName", isOn: false },
    {
      id: 4,
      data: "stockQuantity",
      filterName: "Stock",
      isOn: false,
      type: "number",
    },
    {
      id: 5,
      data: "shelfQuantity",
      filterName: "Shelf Quantity",
      isOn: false,
      type: "number",
    },
    {
      id: 6,
      data: "expirationDate",
      filterName: "EXP Date",
      isOn: false,
      type: "date",
    },
  ]);
  const [searchShelfInput, setSearchShelfInput] = useState({
    shelfItemId: "",
    stockId: "",
    productName: "",
    stockQuantity: "",
    shelfQuantity: "",
    expirationdate: "",
  });
  const searchShelfFunction = async (input) => {
    try {
      const {
        shelfItemId,
        stockId,
        productName,
        stockQuantity,
        shelfQuantity,
        expirationdate,
      } = input;
      console.log(input);
      const searchResult = await axios.get(
        `/wms/shelf?shelfItemId=${shelfItemId}&stockId=${stockId}&shelfQuantity=${shelfQuantity}&expirationDate=${expirationdate}&productName=${productName}&stockQuantity=${stockQuantity}`,
        input
      );
      const rawResult = searchResult.data.searchResult;
      const flattenedResult = rawResult.map((item) => ({
        ...item,
        productName: item.productStock.productName,
        stockQuantity: item.productStock.stockQuantity,
        expirationDate: item.productStock.expirationDate,
        pricePerUnit: item.productStock.pricePerUnit,
      }));
      for (let order of flattenedResult) {
        if (order.expirationDate) {
          order.expirationDate = date.transform(
            order.expirationDate.split("T")[0],
            "YYYY-MM-DD",
            "DD MMM YYYY"
          );
        }
      }
      setSearchShelfResult(flattenedResult);
    } catch (error) {
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response?.data.message}`
      );
    }
  };

  const [shelfCreateInput, setShelfCreateInput] = useState({
    stockId: "",
  });
  const shelfCreateFunction = async () => {
    try {
      const createResult = await axios.post("/wms/shelf", shelfCreateInput);
      searchShelfFunction(searchShelfInput);
      AlertNotiSuc(
        "success",
        "Shelf Record created",
        `Your Shelf code is  : "${createResult.data.createResult.shelfItemId}"`
      );
    } catch (error) {
      console.log(error);
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response?.data.message}`
      );
    }
  };
  const shelfDeleteFunction = async (input) => {
    try {
      const deleteShelf = await axios.delete(`/wms/shelf?shelfItemId=${input}`);
      const deleteShelfInstance = deleteShelf.data.deletedShelf;
      setSearchShelfResult((prev) => {
        return prev.filter(
          (el) => el.shelfItemId !== deleteShelfInstance.shelfItemId
        );
      });
      AlertNotiSuc(
        "success",
        "Change saved",
        `Shelf ID "${deleteShelfInstance.shelfItemId}" deleted`
      );
    } catch (error) {
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response?.data.message}`
      );
    }
  };
  const [selectedShelf, setSelectedShelf] = useState({});
  const [editShelfInput, setEditShelfInput] = useState({
    shelfItemId: "",
    stockId: "",
    productName: "",
    shelfQuantity: "",
    stockQuantity: "",
    quantityTobeMoved: "",
  });
  const editShelfFunction = async () => {
    try {
      const inputObject = {
        shelfItemId: editShelfInput.shelfItemId,
        shelfAddQuantity: editShelfInput.quantityTobeMoved,
      };
      const editResult = await axios.patch("/wms/shelf", inputObject);
      const data = editResult.data;
      AlertNotiSuc(
        "success",
        "Product Movde to Shelf !",
        `Moved  ${inputObject.shelfAddQuantity} products to shelf now shelf has ${data.updatedResult.shelfQuantity} products`
      );
      setEditShelfInput({
        shelfItemId: "",
        stockId: "",
        productName: "",
        shelfQuantity: "",
        stockQuantity: "",
        quantityTobeMoved: "",
      });
      searchShelfFunction(searchShelfInput);
    } catch (error) {
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response?.data.message}`
      );
    }
  };
  useEffect(() => {
    searchSupplier(searchInput).catch((error) => console.log(error));
    searchOrderFunction(searchOrderInput).catch((error) => console.log(error));
    searchStockFunction(searchStockInput).catch((error) => console.log(error));
    searchShelfFunction(searchShelfInput).catch((error) => console.log(error));
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
    searchStockResult,
    createStockInput,
    setCreateStockInput,
    stockCreateFunction,
    deleteStockFunction,
    editStockInput,
    setEditStockInput,
    selectedStock,
    setSelectedStock,
    editStockFunction,
    shelfBar,
    setShelfBar,
    searchShelfInput,
    setSearchShelfInput,
    searchShelfFunction,
    searchShelfResult,
    shelfCreateInput,
    setShelfCreateInput,
    shelfCreateFunction,
    shelfDeleteFunction,
    setSelectedShelf,
    selectedShelf,
    editShelfInput,
    setEditShelfInput,
    editShelfFunction,
  };

  return <WMSContext.Provider value={shareObj}>{children}</WMSContext.Provider>;
}
