import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/loginpage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  { path: "/register", element: <RegisterPage /> },
  {
    path: "/",
    element: <h1>Need to be login dayo</h1>,
  },
]);

export default function Route() {
  return <RouterProvider router={router}></RouterProvider>;
}
