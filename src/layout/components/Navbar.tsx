import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box display="flex" gap={1} alignItems="center">
            <Typography
              variant="h6"
              component="div"
              sx={{
                border: "1px solid white",
                paddingX: 2,
                paddingY: 0.5,
                borderRadius: "5px",
              }}
            >
              Sp
            </Typography>
            <Typography>Simple Pos</Typography>
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
