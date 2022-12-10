import { MainLayout } from "layout";
import Breadcrumbs from "layout/components/Breadcrumbs";
import Navbar from "layout/components/Navbar";
import { Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <MainLayout>
      Menu
      <Outlet />
    </MainLayout>
  );
};

export default Menu;
