import "./App.css";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle, ThemeButton } from "./styles";
import { useState } from "react";
import ProductDetail from "./components/ProductDetail";
import _products from "./products";

function App() {
  const [products, setProducts] = useState(_products);
  const deleteProduct = (productId) => {
    const filterdProduct = products.filter(
      (product) => product.id !== productId
    );
    setProducts(filterdProduct);
    setProduct(null);
  };
  const [product, setProduct] = useState(null);
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

  const setView = () => {
    if (product !== null) {
      return (
        <ProductDetail
          deleteProduct={deleteProduct}
          setProduct={setProduct}
          product={product}
        />
      );
    } else {
      return (
        <ProductList
          setProduct={setProduct}
          products={products}
          deleteProduct={deleteProduct}
        />
      );
    }
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleCurrentTheme}>
        {currentTheme === "dark" ? "Light Theme" : "Dark Theme"}
      </ThemeButton>
      <Home />
      {setView()}
    </ThemeProvider>
  );
}

export default App;
