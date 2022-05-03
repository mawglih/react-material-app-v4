import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { darkTheme } from "./ui/theme";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "../routes";
import Footer from "./ui/Footer";
import HeaderAppBar from "./ui/AppBar";

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <HeaderAppBar
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <MyRoutes />
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
