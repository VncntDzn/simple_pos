import {
  Appetizer,
  ChefRecommendation,
  Desserts,
  ErrorPage,
  Home,
  MainCourse,
  Menu,
  SelectedFood,
  Categories,
} from "pages";
import Drinks from "pages/menu/components/drinks";
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
        element: <Categories />,
        caseSensitive: true,
        index: true,
      },
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
        path: "drinks",
        element: <Drinks />,
        caseSensitive: true,
      },
      {
        path: ":id",
        element: <SelectedFood />,
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
