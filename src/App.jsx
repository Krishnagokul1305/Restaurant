import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Applayout from "./ui/Applayout";
import Home from "./ui/Home";
import Menu, { loader as MenuLoader } from "./Features/Menu/Menu";
import Order from "./Features/Order/Order";
import Cart from "./Features/Cart/Cart";
import CreateOrder, { postOrder } from "./Features/Order/CreateOrder";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "",
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
        loader: MenuLoader,
      },
      {
        path: "order/new",
        element: <CreateOrder />,
        // loader: getlocation,
        action:postOrder
      },
      {
        path: "order/:id",
        element: <Order />,
        // loader:OrderLoader
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
