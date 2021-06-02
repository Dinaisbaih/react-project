import "../App.css";
import products from "../products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const newArray = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return <div className="products">{newArray}</div>;
};

export default ProductList;
