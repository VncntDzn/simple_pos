import { green } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e4163d",
    },
    secondary: {
      main: green[500],
    },
  },
});
export default theme;
