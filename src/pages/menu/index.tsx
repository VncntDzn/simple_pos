import { MainLayout } from "layout";
import { Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default Menu;
