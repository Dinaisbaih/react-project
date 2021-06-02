import "../App.css";
import { Item } from "../styles";
const ProductItem = (props) => {
  console.log(props);
  return (
    <Item>
      <img src={props.product.imageUrl} />
      <p> Name: {props.product.name}</p>
      <p>Price: {props.product.price}</p>
    </Item>
  );
};
export default ProductItem;
