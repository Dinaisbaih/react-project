import "./App.css";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle, ThemeButton } from "./styles";
import { useState } from "react";

function App() {
  const savedTheme = localStorage.getItem("current");
  console.log(savedTheme, "saved");
  const [currentTheme, setCurrentTheme] = useState(
    savedTheme === "dark" ? "dark" : "light"
  );
  const toggleCurrentTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
      localStorage.setItem("current", "dark");
    } else {
      setCurrentTheme("light");
      localStorage.setItem("current", "light");
    }
  };
  console.log(currentTheme);
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleCurrentTheme}>
        {currentTheme === "dark" ? "Light Theme" : "Dark Theme"}
      </ThemeButton>
      <Home />
      <ProductList />
    </ThemeProvider>
  );
}

export default App;
