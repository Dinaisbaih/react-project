import products from "../products";
import productsData from "../products";
import { DELETE_PRODUCT } from "./actions";

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
    default:
      return state;
  }
};

export default reducer;
