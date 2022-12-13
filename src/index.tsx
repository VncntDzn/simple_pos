import { CssBaseline, ThemeProvider } from "@mui/material";
import { FoodProvider } from "context/FoodProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "routes";
import theme from "theme";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <FoodProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </FoodProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
