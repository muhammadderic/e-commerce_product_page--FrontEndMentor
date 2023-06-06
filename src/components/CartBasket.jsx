import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "../styles/cart_basket.css";
import CartItem from "./CartItem";

export default function CartBasket() {
  const totalProduct = useContext(ProductContext);

  return (
    <div className="cart__modal">
      <p className="cart__title">Cart</p>
      {totalProduct.state ? <CartItem item={totalProduct.state} /> : <p className="emptyCart">Your cart is empty</p>}
    </div>
  )
}