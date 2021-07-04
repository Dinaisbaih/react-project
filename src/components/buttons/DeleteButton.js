import { DeleteButtonStyled } from "../../styles";
import { FaTrash } from "react-icons/fa";
import { deleteProduct } from "../../store/actions/productActions";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

const DeleteButton = (props) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteProduct(props.productId));
  };
  return (
    <DeleteButtonStyled onClick={handleDelete}>
      <FaTrash />
    </DeleteButtonStyled>
  );
};
export default DeleteButton;
