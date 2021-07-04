import { Route, Switch } from "react-router";
import ShopDetail from "../components/ShopDetail";
import ShopList from "../components/ShopList";
import ProductDetail from "../components/ProductDetail";
import FormProduct from "../components/FormProduct";
import Home from "../components/Home";
import ProductList from "../components/ProductList";
import Signup from "./Signup";

const Routes = () => {
  return (
    <Switch>
      <Route path={["/products/FormProduct", "/products/:productSlug/edit"]}>
        <FormProduct />
      </Route>
      <Route path="/products/:productSlug">
        <ProductDetail />
      </Route>

      <Route path=" /shops/:shopSlug">
        <ShopDetail />
      </Route>
      <Route path="/shops">
        <ShopList />
      </Route>
      <Route path="/products">
        <ProductList />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin"></Route>
    </Switch>
  );
};

export default Routes;
