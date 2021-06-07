import { DeleteButtonStyled } from "../../styles";
import { FaTrash } from "react-icons/fa";
const DeleteButton = (props) => {
  const handleDelete = (productId) => {
    props.deleteProduct(productId);
  };
  return (
    <DeleteButtonStyled onClick={() => handleDelete(props.productId)}>
      <FaTrash />
    </DeleteButtonStyled>
  );
};
export default DeleteButton;
