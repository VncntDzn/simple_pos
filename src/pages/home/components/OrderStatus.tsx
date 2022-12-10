import { Box, Card, CardContent, Typography } from "@mui/material";
import OrderSvg from "assets/images/order.svg";

const OrderStatus = ({ bg }: { bg: string }) => {
  return (
    <Box
      component={Card}
      flex="50%"
      sx={{
        backgroundColor: bg,
        color: "white",
      }}
    >
      <CardContent>
        <Box
          sx={{
            height: { xs: 150, lg: 300 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={OrderSvg} alt="menu" height={"100%"} />
        </Box>
        <Typography textAlign="center">Order Status</Typography>
      </CardContent>
    </Box>
  );
};

export default OrderStatus;
