import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/loginpage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import WMSHomePage from "../pages/WMSPage/WMSHomePage";
import Authenticated from "../features/Authenticated";
import RedirectIfAuthenticate from "../features/RedirectIfAuthenticate";
import HomePage from "../pages/homaPage/HomePage";
import HomeBody from "../pages/homaPage/HomeBody";
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
            <h1>WMS</h1>
          </Authenticated>
        ),
      },
      {
        path: "/pos",
        element: <h1>pos</h1>,
      },
      {
        path: "/admin",
        element: (
          <Authenticated authWho={"admin"}>
            <h1>admin</h1>
          </Authenticated>
        ),
      },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router}></RouterProvider>;
}
