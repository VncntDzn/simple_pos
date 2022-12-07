import {
  Appetizer,
  ChefRecommendation,
  Desserts,
  ErrorPage,
  Home,
  MainCourse,
  Menu,
} from "pages";
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
        path: "/chef-recommendation",
        element: <ChefRecommendation />,
      },
      {
        path: "/main-course",
        element: <MainCourse />,
      },
      {
        path: "/appetizer",
        element: <Appetizer />,
      },
      {
        path: "/desserts",
        element: <Desserts />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default routes;
