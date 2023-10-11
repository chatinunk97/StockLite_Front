import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/loginpage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import WMSHomePage from "../pages/WMSPage/WMSHomePage";
import Authenticated from "../features/Authenticated";
import RedirectIfAuthenticate from "../features/RedirectIfAuthenticate";
import HomePage from "../pages/homaPage/HomePage";
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
  },
]);

export default function Route() {
  return <RouterProvider router={router}></RouterProvider>;
}
