import { useState } from "react";
import ProductItem from "./ProductItem";
import { FormButton, List } from "../styles";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductList = (props) => {
  const [query, setQuery] = useState("");
  const products = useSelector((state) => state.products.products);
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
      <Link to="/products/FormProduct">
        <button>Add New</button>
      </Link>
      <SearchBar setQuery={setQuery} />
      <List>{newArray}</List>
    </div>
  );
};

export default ProductList;
