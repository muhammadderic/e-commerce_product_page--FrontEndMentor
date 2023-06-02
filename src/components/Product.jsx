export default function Product() {
  return (
    <div className="container">
      <div className="product wrapper">
        <div className="product__left">
          <img src="/images/image-product-1.jpg" alt="" className="product__main" />
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
            <p className="price__disc">
              <p className="current-price">$125.00</p>
              <p className="discount">50%</p>
            </p>
            <p className="before-price">$250.00</p>
          </div>
          <div className="product__right-bottom">
            <div className="product__quantity">
              <img className="minus-icon" src="/images/icon-minus.svg" alt="reduce shopping items" />
              <p className="quantity">0</p>
              <img className="plus-icon" src="/images/icon-plus.svg" alt="add more shopping items" />
            </div>
            <button className="btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}