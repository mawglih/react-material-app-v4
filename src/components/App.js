import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { darkTheme } from "./ui/theme";
import AppBar from "./ui/AppBar";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar />
      <h1>Huj</h1>
    </ThemeProvider>
  );
}

export default App;
