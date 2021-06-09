import { DeleteButtonStyled } from "../../styles";
import { FaTrash } from "react-icons/fa";
const DeleteButton = (props) => {
  console.log(props);
  // const handleDelete = (productId) => {
  //   props.deleteProduct(productId);
  // };
  return (
    <DeleteButtonStyled onClick={() => props.deleteProduct(props.productId)}>
      <FaTrash />
    </DeleteButtonStyled>
  );
};
export default DeleteButton;
