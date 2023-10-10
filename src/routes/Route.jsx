import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/loginpage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import WMSHomePage from "../pages/WMSPage/WMSHomePage";
import WMSLayout from "../pages/WMSPage/WMSLayout";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  { path: "/register", element: <RegisterPage /> },
  {
    path: "/wms",
    element: <WMSLayout/>,
    children :[{
      path :'home',
      element : <WMSHomePage/>
    }]
  },
]);

export default function Route() {
  return <RouterProvider router={router}></RouterProvider>;
}
