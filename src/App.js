import Home from "./components/Home";
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import {
  theme,
  GlobalStyle,
  ThemeButton,
  NavProduct,
  Logo,
  BarDiv,
} from "./styles";
import { useState } from "react";
import ProductDetail from "./components/ProductDetail";
import FormProduct from "./components/FormProduct";
import _products from "./products";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router";

function App() {
  const savedTheme = localStorage.getItem("current");
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

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />

        <NavProduct>
          <Logo to="/">
            <img src="https://img.icons8.com/ios/452/table.png" />
          </Logo>
          <BarDiv>
            <Link to="/products">
              <ThemeButton>Tables</ThemeButton>
            </Link>
            <ThemeButton onClick={toggleCurrentTheme}>
              {currentTheme === "dark" ? "Light Theme" : "Dark Theme"}
            </ThemeButton>
          </BarDiv>
        </NavProduct>

        <Switch>
          <Route
            path={["/products/FormProduct", "/products/:productSlug/edit"]}
          >
            <FormProduct />
          </Route>
          <Route path="/products/:productSlug">
            <ProductDetail />
          </Route>

          <Route path="/products">
            <ProductList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
