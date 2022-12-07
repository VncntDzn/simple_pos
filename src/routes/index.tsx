import ErrorPage from "pages/error";
import Home from "pages/home";
import Menu from "pages/menu";
import { createBrowserRouter } from "react-router-dom";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "menu",
    element: <Menu />,
    children: [
      {
        path: "/recommendation"
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default routes;
