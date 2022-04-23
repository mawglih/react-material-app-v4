import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { darkTheme } from "./ui/theme";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "../routes";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
