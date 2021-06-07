import "../App.css";
import { Item } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
const ProductItem = (props) => {
  const product = props.product;
  return (
    <Item>
      <img onClick={() => props.setProduct(product)} src={product.imageUrl} />
      <p> Name: {props.product.name}</p>
      <p>Price: {props.product.price}</p>
      <DeleteButton
        deleteProduct={props.deleteProduct}
        productId={props.product.id}
      />
    </Item>
  );
};
export default ProductItem;
