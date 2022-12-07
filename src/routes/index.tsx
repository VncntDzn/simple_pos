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
        path: "menu/chef-recommendation",
        element: <ChefRecommendation />,
      },
      {
        path: "menu/main-course",
        element: <MainCourse />,
      },
      {
        path: "menu/appetizer",
        element: <Appetizer />,
      },
      {
        path: "menu/desserts",
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
