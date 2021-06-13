import slugify from "slugify";
import products from "../products";
import productsData from "../products";
import { CREATE_PRODUCT, DELETE_PRODUCT } from "./actions";

const initialState = {
  products: productsData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      console.log(action);
      return {
        ...state,
        products: state.products.filter((product) => {
          return product.id !== action.payload.productId;
        }),
      };
    case CREATE_PRODUCT:
      const { newProduct } = action.payload;
      newProduct.id = state.products[state.products.length - 1].id + 1;
      newProduct.slug = slugify(newProduct.name);

      return {
        ...state,
        products: [...state.products, action.payload.newProduct],
      };
    default:
      return state;
  }
};

export default reducer;
