import { ThemeProvider } from "styled-components";
import {
  theme,
  GlobalStyle,
  ThemeButton,
  NavProduct,
  Logo,
  BarDiv,
  NavItem,
} from "./styles";
import { useState } from "react";
import Routes from "./components/Routes";
import _products from "./products";
import { BrowserRouter, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SignupButton from "./components/buttons/SignupButton ";

function App() {
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);

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
            <NavItem to="/shops">Shops</NavItem>
            <Link to="/products">
              <ThemeButton>Tables</ThemeButton>
            </Link>
            <ThemeButton onClick={toggleCurrentTheme}>
              {currentTheme === "dark" ? "Light Theme" : "Dark Theme"}
            </ThemeButton>
            <SignupButton />
          </BarDiv>
        </NavProduct>

        {/* { {loadingProducts || loadingShop ? ( } */}
        {/* { <h3>Loading...</h3> } */}
        {/* { ) : ( */}
        <Routes products={products} />
        {/* )} } */}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
