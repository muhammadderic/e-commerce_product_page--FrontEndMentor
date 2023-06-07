import { useState } from "react";
import CartBasket from "./CartBasket";

export default function Navbar() {
  const [isOpenCard, setIsOpenCart] = useState(false);

  const openCartModal = () => {
    setIsOpenCart(!isOpenCard);
  }

  const openMenu = () => {
    const menu = document.querySelector(".menu");
    const closeIcon = document.querySelector(".closeIcon");
    const menuIcon = document.querySelector(".menuIcon");

    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }

  return (
    <div className="container">
      <div className="navbar wrapper">
        <div className="navbar__left">
          <button className="hamburger" onClick={openMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="menuIcon" width="70"
              height="70" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="closeIcon" width="70" height="70"
              viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </button>
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