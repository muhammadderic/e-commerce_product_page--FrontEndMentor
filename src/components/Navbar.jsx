import { useState } from "react";
import CartBasket from "./CartBasket";

export default function Navbar() {
  const [isOpenCard, setIsOpenCart] = useState(false);


  const openCartModal = () => {
    console.log(isOpenCard);
    setIsOpenCart(!isOpenCard);
  }

  return (
    <div className="container">
      <div className="navbar wrapper">
        <div className="navbar__left">
          <img src="/images/logo.svg" alt="company logo" className="navbar__logo" />
          <ul className="menu">
            <li className="menu__item">
              <a href="/">Collections</a>
            </li>
            <li className="menu__item">
              <a href="/">Men</a>
            </li>
            <li className="menu__item">
              <a href="/">Women</a>
            </li>
            <li className="menu__item">
              <a href="/">About</a>
            </li>
            <li className="menu__item">
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar__right">
          <img onClick={openCartModal} src="/images/icon-cart.svg" alt="cart icon to store the items you want to buy" className="icon-cart" />
          <img src="/images/image-avatar.png" alt="" className="navbar__profile" />
        </div>
      </div>
      <div className="navbar__bottom">
        {isOpenCard && <CartBasket />}
      </div>
    </div>
  )
}