import { Box, Card, CardContent, Typography } from "@mui/material";

import MenuSvg from "assets/images/menu.svg";
const Menu = ({ bg }: { bg: string }) => {
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
            height: { xs: 200, lg: 300 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={MenuSvg} alt="menu" height={"100%"} />
        </Box>
        <Typography textAlign="center">Menu</Typography>
      </CardContent>
    </Box>
  );
};

export default Menu;
