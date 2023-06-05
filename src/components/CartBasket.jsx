import "../styles/cart_basket.css";

export default function CartBasket() {
  return (
    <div className="cart__modal">
      <p className="cart__title">Cart</p>
      <div className="cart__content">
        <p>Your cart is empty.</p>
      </div>
    </div>
  )
}