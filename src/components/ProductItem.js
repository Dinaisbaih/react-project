import { Link } from "react-router-dom";

import { Item } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
const ProductItem = (props) => {
  const product = props.product;

  return (
    <Item>
      <Link to={`/products/${product.slug}`}>
        <img src={product.imageUrl} />
      </Link>
      <p> Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <DeleteButton productId={props.product.id} />
    </Item>
  );
};
export default ProductItem;
