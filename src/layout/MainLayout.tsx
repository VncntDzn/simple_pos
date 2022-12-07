import { Box } from "@mui/material";
import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return <Box>{children}</Box>;
};

export default MainLayout;
