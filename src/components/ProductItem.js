import { Link } from "react-router-dom";

import { Item } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
const ProductItem = (props) => {
  const product = props.product;
  console.log(product);

  return (
    <Item>
      <Link to={`/products/${product.slug}`}>
        <img src={product.imageUrl} />
      </Link>
      <p> Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <DeleteButton
        deleteProduct={props.deleteProduct}
        productId={props.product.id}
      />
    </Item>
  );
};
export default ProductItem;
