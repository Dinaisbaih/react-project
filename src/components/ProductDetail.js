import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
const ProductDetail = (props) => {
  return (
    <DetailWrapper>
      <h1>{props.product.name}</h1>
      <img src={props.product.imageUrl} />
      <text>{props.product.description}</text>
      <text>{props.product.price}</text>
      <button onClick={() => props.setProduct(null)}>Go Back</button>
      <DeleteButton
        deleteProduct={props.deleteProduct}
        productId={props.product.id}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
