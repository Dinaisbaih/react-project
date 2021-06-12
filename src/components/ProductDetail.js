import { useParams, Redirect } from "react-router";
import { Link } from "react-router-dom";
import { DetailDiv, DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import _products from "../products";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const { productSlug } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((product) => product.slug === productSlug);

  if (!product) return <Redirect to="/products" />;

  return (
    <DetailDiv>
      <DetailWrapper>
        <h1>{product.name}</h1>
        <img src={product.imageUrl} />
        <text>{product.description}</text>
        <text>{product.price}</text>
        <Link to="/products">
          <button>Go Back</button>
        </Link>
        <DeleteButton product={product} productId={product.id} />
      </DetailWrapper>
    </DetailDiv>
  );
};

export default ProductDetail;
