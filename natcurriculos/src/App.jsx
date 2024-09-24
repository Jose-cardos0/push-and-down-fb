import { Routes, Route, createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { AdminArea } from "./pages/AdminArea";
import { Login } from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <AdminArea />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export { router };
