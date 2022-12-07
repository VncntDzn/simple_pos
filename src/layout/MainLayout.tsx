import { Box } from "@mui/material";
import { ReactNode } from "react";
import Breadcrumbs from "./components/Breadcrumbs";

type MainLayoutProps = {
  children: ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box>
      <Breadcrumbs />
      {children}
    </Box>
  );
};

export default MainLayout;
