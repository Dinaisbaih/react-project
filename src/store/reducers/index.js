import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { fetchProducts } from "../actions/productActions";
import { fetchShops } from "../actions/shopActions";
import rootReducer from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchProducts());
store.dispatch(fetchShops());
export default store;
