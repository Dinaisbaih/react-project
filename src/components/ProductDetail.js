import { useParams } from "react-router";
import { Redirect } from "react-router-dom";
import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import _products from "../products";
import { useState } from "react";

const ProductDetail = (props) => {
  const productSlug = useParams().productSlug;
  const product = props.products.find(
    (product) => product.slug === productSlug
  );
  const [products, setProducts] = useState(_products);

  const deleteProduct = (productId) => {
    const filterdProduct = products.filter(
      (product) => product.id !== productId
    );
    setProducts(filterdProduct);
    console.log(filterdProduct, "fff");
  };
  if (!product) return <Redirect to="/" />;

  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} />
      <text>{product.description}</text>
      <text>{product.price}</text>
      <button onClick={() => props.setProduct(null)}>Go Back</button>
      <DeleteButton deleteProduct={deleteProduct} productId={product.id} />
    </DetailWrapper>
  );
};

export default ProductDetail;
