import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { MainLayout } from "layout";
import Menu from "./components/Menu";
import OrderStatus from "./components/OrderStatus";

const Home = () => {
  const theme = useTheme();

  return (
    <MainLayout>
      <Box
        display="flex"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: "1rem",
        }}
      >
        {/*    @ts-ignore: */}
        <OrderStatus bg={theme.palette.primary.main} />
        {/*    @ts-ignore: */}
        <Menu bg={theme.palette.primary.main} />
      </Box>
    </MainLayout>
  );
};

export default Home;
