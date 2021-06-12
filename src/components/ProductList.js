import { useState } from "react";
import ProductItem from "./ProductItem";
import { List } from "../styles";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
const ProductList = (props) => {
  const [query, setQuery] = useState("");
  const products = useSelector((state) => state.products);
  const newArray = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductItem
        setProducts={props.setProducts}
        product={product}
        key={product.id}
        deleteProduct={props.deleteProduct}
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
