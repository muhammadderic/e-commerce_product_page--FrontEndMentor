import "../styles/product_modal.css";

export default function ProductModal({ closeProductModal }) {
  return (
    <>
      <div className="overlay">
        <div className="modal">
          <div className="modal__close-icon__wrapper" onClick={closeProductModal}>
            <svg className="modal__close-icon" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd" /></svg>
          </div>
          <div className="modal__image">
            <div className="main-product__wrapper">
              <svg className="modal__main-picture-icon main-picture-icon__previous" width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
              <img src="/images/image-product-1.jpg" alt="" className="product__main" />
              <svg className="modal__main-picture-icon main-picture-icon__next" width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
            </div>
            <div className="product__thumbnails-modal">
              <div className="thumbnail__wrapper">
                <img src="/images/image-product-1-thumbnail.jpg" alt="" className="product__thumbnail-modal" />
              </div>
              <div className="thumbnail__wrapper">
                <img src="/images/image-product-2-thumbnail.jpg" alt="" className="product__thumbnail-modal" />
              </div>
              <div className="thumbnail__wrapper">
                <img src="/images/image-product-3-thumbnail.jpg" alt="" className="product__thumbnail-modal" />
              </div>
              <div className="thumbnail__wrapper">
                <img src="/images/image-product-4-thumbnail.jpg" alt="" className="product__thumbnail-modal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}