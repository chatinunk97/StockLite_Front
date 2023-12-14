import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import Authenticated from "../features/Authenticated";
import RedirectIfAuthenticate from "../features/RedirectIfAuthenticate";
import HomePage from "../pages/homaPage/HomePage";
import HomeBody from "../pages/homaPage/HomeBody";
import AdminMainPage from "../pages/AdminPage/AdminMainPage";
import AdminSearchUser from "../pages/AdminPage/AdminSearchUser/AdminSearchUser";
import AdminCreateUser from "../pages/AdminPage/AdminCreateUser/AdminCreateUser";
import AdminEditUser from "../pages/AdminPage/AdminEditUSer/AdminEditUser";
import WMSHomePage from "../pages/WMSPage/WMSHomePage";
import SupplierMainPage from "../pages/WMSPage/Supplier/SupplierMainPage";
import SupplierSearch from "../pages/WMSPage/Supplier/SupplierSearch/SupplierSearch";
import SupplierEdit from "../pages/WMSPage/Supplier/SupplierEdit/SupplierEdit";
import OrderMainPage from "../pages/WMSPage/Order/OrderMainPage";
import OrderSearch from "../pages/WMSPage/Order/OrderSearch/OrderSearch";
import OrderEdit from "../pages/WMSPage/Order/OrderEdit/OrderEdit";
import StockMainPage from "../pages/WMSPage/Stock/StockMainPage";
import StockSearch from "../pages/WMSPage/Stock/StockSearch/StockSearch";
import StockEdit from "../pages/WMSPage/Stock/StockEdit/StockEdit";
import ShelfMainPage from "../pages/WMSPage/Shelf/ShelfMainPage";
import ShelfSearch from "../pages/WMSPage/Shelf/ShelfSearch/ShelfSearch";
import ShelfEdit from "../pages/WMSPage/Shelf/ShelfEdit/ShelfEdit";
import PosMainPage from "../pages/POSPage/PosMainPage";
import AdminSales from "../pages/AdminPage/AdminSales/AdminSales";
import { Navigate } from "react-router-dom";
import ContactUs from "../pages/ContactUs/ContactUs";

export default function Route() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <RedirectIfAuthenticate>
          <LoginPage />,
        </RedirectIfAuthenticate>
      ),
    },
    {
      path: "/register",
      element: (
        <RedirectIfAuthenticate>
          <RegisterPage />
        </RedirectIfAuthenticate>
      ),
    },
    {
      path: "/",
      element: (
        <Authenticated>
          <HomePage />
        </Authenticated>
      ),
      errorElement: <Navigate to={"/"} />,
      children: [
        {
          path: "/",
          element: <HomeBody />,
        },
        {
          path: "/wms",
          element: (
            <Authenticated authWho={"supervisor"}>
              <WMSHomePage />
            </Authenticated>
          ),
          children: [
            {
              path: "/wms/supplier",
              element: <SupplierMainPage />,
              children: [
                { path: "/wms/supplier/search", element: <SupplierSearch /> },
                { path: "/wms/supplier/edit", element: <SupplierEdit /> },
              ],
            },
            {
              path: "/wms/order",
              element: <OrderMainPage />,
              children: [
                {
                  path: "/wms/order/search",
                  element: <OrderSearch />,
                },
                { path: "/wms/order/edit", element: <OrderEdit /> },
              ],
            },
            {
              path: "/wms/stock",
              element: <StockMainPage />,
              children: [
                {
                  path: "/wms/stock/search",
                  element: <StockSearch />,
                },
                { path: "/wms/stock/edit", element: <StockEdit /> },
              ],
            },
            {
              path: "/wms/shelf",
              element: <ShelfMainPage />,
              children: [
                { path: "/wms/shelf/search", element: <ShelfSearch /> },
                { path: "/wms/shelf/edit", element: <ShelfEdit /> },
              ],
            },
          ],
        },
        {
          path: "/pos",
          element: <PosMainPage />,
        },
        {
          path: "/admin",
          element: (
            <Authenticated authWho={"admin"}>
              <AdminMainPage />
            </Authenticated>
          ),
          children: [
            { path: "/admin/search", element: <AdminSearchUser /> },
            { path: "/admin/create", element: <AdminCreateUser /> },
            { path: "/admin/edit", element: <AdminEditUser /> },
            { path: "/admin/sales", element: <AdminSales /> },
          ],
        },
        { path: "/contact", element: <ContactUs /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
