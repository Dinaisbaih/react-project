import { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import ShopItem from "./ShopItem";

const ShopList = (props) => {
  const [query, setQuery] = useState("");

  const shopsData = useSelector((state) => state.shops.shops);
  let shops = shopsData
    .filter((shop) => shop.name.toLowerCase().includes(query.toLowerCase()))
    .map((shop) => <ShopItem shop={shop} key={shop.id} />);
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <list>{shops}</list>
    </div>
  );
};

export default ShopList;
