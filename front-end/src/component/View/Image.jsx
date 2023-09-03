import React from 'react'


const Image = () => {
   
  return (
    <div
      className="single-product mt-150 mb-150]"
      style={{ paddingBottom: "10rem" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="single-product-img">
              <img
                src="https://i.pinimg.com/736x/74/7f/d4/747fd4d89d007ca20cabf42c4ebb3db3.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="single-product-content">
              <h3>Green apples have polyphenols</h3>
              <p className="single-product-pricing">
                <span>Per Kg</span> $50
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                sint dignissimos, rem commodi cum voluptatem quae reprehenderit
                repudiandae ea tempora incidunt ipsa, quisquam animi perferendis
                eos eum modi! Tempora, earum.
              </p>

              <h4>Share:</h4>
              <div className="single-product-form">
                <p>
                  <strong>Categories: </strong>Fruits, Organic
                </p>

                <a href="cart.html" className="cart-btn">
                  {" "}
                  Remove
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Image
