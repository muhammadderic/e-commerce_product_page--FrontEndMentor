import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Button from "./Button";

export default function CartItem({ item }) {
  const { dispatch } = useContext(ProductContext);

  const deleteProductCard = () => {
    dispatch({
      type: "REMOVE_PRODUCT",
    });
  }

  return (
    <div className="cart__content">
      <div className="cart__item">
        <img src={item.src} alt="" className="cart__item__img" />
        <div className="cart__detail">
          <div className="cart__detail__top">
            <p>{item.title}</p>
          </div>
          <div className="cart__detail__bottom">
            <p>{`$${item.currentPrice}.00 x ${item.quantityProduct} `} <b>${item.beforePrice}.00</b></p>
          </div>
        </div>
        <div className="icon-delete__wrapper" onClick={deleteProductCard}>
          <img className="delete-icon" src="/images/icon-delete.svg" alt="remove product item" />
        </div>
      </div>
      <Button text="Checkout" />
    </div>
  )
}