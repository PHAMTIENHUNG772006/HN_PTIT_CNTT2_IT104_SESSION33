import ShoppingCart from "./ShoppingCart";
import ListProduct from "./ListProduct";

export default function Layout() {

  return (
    <div className="container">
      <div className="left-container">
        <ListProduct ></ListProduct>
      </div>
      <div className="left-container">
        <ShoppingCart ></ShoppingCart>
      </div>
    </div>
  );
}
