import "../App.css";
import products from "../products";
import ProductItem from "./ProductItem";
import { List } from "../styles";
const ProductList = () => {
  const newArray = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return <List>{newArray}</List>;
};

export default ProductList;
