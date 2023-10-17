import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/loginpage/LoginPage";
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
    { path: "/register", element: <RegisterPage /> },
    {
      path: "/",
      element: (
        <Authenticated>
          <HomePage />
        </Authenticated>
      ),
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
                  element: <h1>SEARCH</h1>,
                },
                { path: "/wms/order/edit", element: <h1>EDIT</h1> },
              ],
            },
            { path: "/wms/stock", element: <h1>Stock</h1> },
            { path: "/wms/shelf", element: <h1>Shelf</h1> },
          ],
        },
        {
          path: "/pos",
          element: <h1>pos</h1>,
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
          ],
        },
      ],
    },
  ]);
  
  return <RouterProvider router={router}></RouterProvider>;
}
