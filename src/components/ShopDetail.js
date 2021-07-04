import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import { DetailWrapper } from "../styles";
import ShopList from "./ShopList";
const ShopDetail = () => {
  const shopSlug = useParams().shopSlug;
  const shops = useSelector((state) => state.shops.shops);
  const shop = shops.find((s) => s.slug === shopSlug);
  if (!shop) return <Redirect to="/" />;
  return (
    <DetailWrapper>
      <h4>{shop.name}</h4>
      <img src={shop.imageUrl} />
      <ShopList />
    </DetailWrapper>
  );
};

export default ShopDetail;
