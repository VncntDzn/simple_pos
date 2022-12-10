import {
  Appetizer,
  ChefRecommendation,
  Desserts,
  ErrorPage,
  Home,
  MainCourse,
  Menu,
} from "pages";
import Food from "pages/menu/components/shared/Food";
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
        path: "chef-recommendation",
        element: <ChefRecommendation />,
        caseSensitive: true,
      },
      {
        path: "main-course",
        element: <MainCourse />,
        caseSensitive: true,
      },
      {
        path: "appetizer",
        element: <Appetizer />,
        caseSensitive: true,
      },
      {
        path: "desserts",
        element: <Desserts />,
        caseSensitive: true,
      },
      {
        path: ":food",
        element: <Food />,
        caseSensitive: true,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default routes;
