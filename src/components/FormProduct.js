import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { AddTableDiv, FormInput } from "../styles";
import { useHistory, useParams } from "react-router";
import { createProduct, updateProduct } from "../store/actions/productActions";

const FormProduct = () => {
  const { productSlug } = useParams();
  const products = useSelector((state) => state.products.products);
  const foundProduct = products.find((p) => p.slug === productSlug);
  const [product, setProduct] = useState(
    foundProduct ?? {
      name: "",
      imageUrl: "",
      price: 0,
      description: "",
    }
  );

  const dispatch = useDispatch();
  const history = useHistory();
  const resetForm = () => {
    setProduct({ name: "", imageUrl: "", price: 0, description: "" });
  };

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundProduct) {
      dispatch(updateProduct(product));
    } else {
      dispatch(createProduct(product));
    }

    resetForm();
    history.push("/products");
  };
  const handleImage = (event) =>
    setProduct({ ...product, image: event.target.files[0] });
  return (
    <form onSubmit={handleSubmit}>
      <AddTableDiv>
        <h1>{foundProduct ? "Update Product" : "New Product"}</h1>
        <FormInput
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="enter table name"
        />
        <FormInput
          onChange={handleImage}
          type="file"
          name="imageUrl"
          placeholder="image"
        />
        <FormInput
          onChange={handleChange}
          type="number"
          name="price"
          placeholder="enter table price"
        />
        <FormInput
          onChange={handleChange}
          type="text"
          name="description"
          placeholder="enter table description"
        />
        <button type="submit">{foundProduct ? "Update" : "create"}</button>
      </AddTableDiv>
    </form>
  );
};

export default FormProduct;
