import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu from "./features/menu/Menu.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import Error from "./ui/Error.jsx";
import Home from "./ui/Home.jsx";
import MenuLoader from "./features/menu/MenuLoader.jsx";
import Cart from "./features/cart/Cart.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu />, loader: MenuLoader },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
