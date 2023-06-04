import { useState } from "react";
import Button from "./Button";
import ProductModal from "./ProductModal";

export default function Product() {
  const [isOpen, setIsOpen] = useState(false);

  const showProductModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  }

  const closeProductModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  }

  return (
    <div className="container">
      <div className="product wrapper">
        <div className="product__left">
          <img src="/images/image-product-1.jpg" alt="" className="product__main" onClick={showProductModal} />
          <div className="product__thumbnails">
            <img src="/images/image-product-1-thumbnail.jpg" alt="" className="product__thumbnail" />
            <img src="/images/image-product-2-thumbnail.jpg" alt="" className="product__thumbnail" />
            <img src="/images/image-product-3-thumbnail.jpg" alt="" className="product__thumbnail" />
            <img src="/images/image-product-4-thumbnail.jpg" alt="" className="product__thumbnail" />
          </div>
        </div>
        <div className="product__right">
          <p className="text__company">Sneaker Company</p>
          <h1 className="product__title">
            Fall Limited Edition Sneakers
          </h1>
          <p className="product__detail-text">
            These low-profile sneakers are your perfect casual wear companion. Featuring a
            durable rubber outer sole, they'll withstand everything the weather can offer.
          </p>
          <div className="product__price">
            <div className="price__disc">
              <p className="current-price">$125.00</p>
              <p className="discount">50%</p>
            </div>
            <p className="before-price">$250.00</p>
          </div>
          <div className="product__right-bottom">
            <div className="product__quantity">
              <div className="icon-quantity__wrapper">
                <img className="minus-icon" src="/images/icon-minus.svg" alt="reduce shopping items" />
              </div>
              <p className="quantity">0</p>
              <div className="icon-quantity__wrapper">
                <img className="plus-icon" src="/images/icon-plus.svg" alt="add more shopping items" />
              </div>
            </div>
            <Button text="Add to cart" />
          </div>
        </div>
      </div>
      {isOpen && <ProductModal closeProductModal={closeProductModal} />}
    </div>
  )
}