import React from 'react'


const Card = () => {

  return (
    <div className="row product-lists">
      <div className="col-lg-4 col-md-6 text-center strawberry">
        <div className="single-product-item">
          <div className="product-image">
            <a href="single-product.html">
              <img src="assets/img/products/product-img-1.jpg" alt="" />
            </a>
          </div>
          <h3>name</h3>
          <p className="product-price">
            <span>Size</span> 85${" "}
          </p>
          <a href="cart.html" className="cart-btn">
            <i className="fas fa-shopping-cart" /> View detials
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card
