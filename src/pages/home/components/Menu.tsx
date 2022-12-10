import { Box, Card, CardContent, Typography } from "@mui/material";

import MenuSvg from "assets/images/menu.svg";
import { useNavigate } from "react-router-dom";
const Menu = ({ bg }: { bg: string }) => {
  const navigate = useNavigate();

  const handleNavigateToMenu = () => {
    navigate("/menu");
  };
  return (
    <Box
      onClick={handleNavigateToMenu}
      component={Card}
      flex="50%"
      sx={{
        backgroundColor: bg,
        color: "white",
        cursor: "pointer",
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
