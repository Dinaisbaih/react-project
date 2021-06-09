import Home from "./components/Home";
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle, ThemeButton, NavProduct, Logo } from "./styles";
import { useState } from "react";
import ProductDetail from "./components/ProductDetail";
import _products from "./products";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
import { Route, Switch } from "react-router";

function App() {
  // const [product, setProduct] = useState(null);
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

        <NavProduct to="/products">
          <Logo to="/">
            <img src="https://i.pinimg.com/originals/1f/6c/a6/1f6ca6be3342d2dab602bdfcc52588f0.png" />
          </Logo>
          Products
        </NavProduct>

        <ThemeButton onClick={toggleCurrentTheme}>
          {currentTheme === "dark" ? "Light Theme" : "Dark Theme"}
        </ThemeButton>

        <Switch>
          <Route path="/products/:productSlug">
            <ProductDetail products={_products} />
          </Route>
          <Route path="/products">
            <ProductList products={_products} />
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
