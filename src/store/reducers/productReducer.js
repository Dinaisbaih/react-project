import slugify from "slugify";
import * as actionTypes from "../actions/types";

const initialState = {
  products: [],
  // loading: true,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_PRODUCT:
      console.log(action);
      return {
        ...state,
        products: state.products.filter((product) => {
          return product.id !== action.payload.productId;
        }),
      };
    case actionTypes.CREATE_PRODUCT:
      const { newProduct } = action.payload;
      newProduct.slug = slugify(newProduct.name.toLowerCase());
      return {
        ...state,
        products: [...state.products, action.payload.newProduct],
      };
    case actionTypes.UPDATE_PRODUCT:
      const { updateProduct } = action.payload;
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === updateProduct.id ? updateProduct : product
        ),
      };
    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        // loading: false,
      };
    default:
      return state;
  }
};

export default productReducer;
