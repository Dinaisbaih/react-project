import "./App.css";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <ProductList />
    </ThemeProvider>
  );
}

export default App;
