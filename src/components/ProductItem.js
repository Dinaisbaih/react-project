import "../App.css";

const ProductItem = (props) => {
  console.log(props);
  return (
    <div className="products-div">
      <img className="product-image" src={props.product.imageUrl} />
      <p> Name: {props.product.name}</p>
      <p>Price: {props.product.price}</p>
    </div>
  );
};
export default ProductItem;
