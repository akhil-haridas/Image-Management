import React from 'react'

const AddImage = () => {
  return (
    <div className="checkout-section mb-150" style={{ marginTop: "70px" }}>
      <div className="container">
        <div className="row" style={{ display: "block" }}>
          <div className="">
            <div className="checkout-accordion-wrap">
              <div className="accordion" id="accordionExample">
                <div className="card single-accordion">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Billing Address
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <div className="billing-address-form">
                        <form action="index.html">
                          <p>
                            <input type="text" placeholder="Name" />
                          </p>
                          <p>
                            <input type="email" placeholder="Email" />
                          </p>
                          <p>
                            <input type="text" placeholder="Address" />
                          </p>
                          <p>
                            <input type="tel" placeholder="Phone" />
                          </p>
                          <p>
                            <textarea
                              name="bill"
                              id="bill"
                              cols={30}
                              rows={10}
                              placeholder="Say Something"
                              defaultValue={""}
                            />
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sub-new">
                  <a href="#" class="boxed-btn">
                    Place Order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddImage
