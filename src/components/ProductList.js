import "../App.css";
import { useState } from "react";
import products from "../products";
import ProductItem from "./ProductItem";
import { List } from "../styles";
import SearchBar from "./SearchBar";
const ProductList = () => {
  const [query, setQuery] = useState("");
  const newArray = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductItem
        // setProduct={props.setProduct}
        product={product}
        key={product.id}
        // deleteProduct={props.deleteProduct}
      />
    ));
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <List>{newArray}</List>;
    </div>
  );
};

export default ProductList;
