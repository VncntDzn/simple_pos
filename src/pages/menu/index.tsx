import { MainLayout } from "layout";
import { Outlet } from "react-router-dom";
import Categories from "./components/categories";

const Menu = () => {
  return (
    <MainLayout>
      <Categories />
      <Outlet />
    </MainLayout>
  );
};

export default Menu;
