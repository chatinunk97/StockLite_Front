import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/loginpage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import Authenticated from "../features/Authenticated";
import RedirectIfAuthenticate from "../features/RedirectIfAuthenticate";
import HomePage from "../pages/homaPage/HomePage";
import HomeBody from "../pages/homaPage/HomeBody";
import AdminMainPage from "../pages/AdminPage/AdminMainPage";
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
            <AdminMainPage />
          </Authenticated>
        ),
        children: [{ path: "/admin/user", element: <h1>Filter ja</h1> }],
      },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router}></RouterProvider>;
}
