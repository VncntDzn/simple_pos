import { Box } from "@mui/material";
import { ReactNode } from "react";
import Breadcrumbs from "./components/Breadcrumbs";
import Navbar from "./components/Navbar";

type MainLayoutProps = {
  children: ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box>
      <Navbar />
      <Breadcrumbs />
      <Box paddingY={2} paddingX={3}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
