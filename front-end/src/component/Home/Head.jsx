import React from "react";

const Head = () => {
  return (
    <div className="top-header-area" id="sticker">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="main-menu-wrap">
              {/* menu start */}
              <nav className="main-menu">
                <ul>
                  <li className="current-list-item">
                    <a href="1">Home</a>
                  </li>
                  <li>
                    <a href="1">Collections</a>
                  </li>
                  <li>
                    <a href="1">Add Image</a>
                  </li>
                  <li>
                    <a href="1">Logout</a>
                  </li>
                  <li>
                    <div className="header-icons">
                      <a className="mobile-hide search-bar-icon" href="1">
                        <box-icon
                          name="user"
                          type="solid"
                          color="#ffffff"
                        ></box-icon>
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              <a className="mobile-show search-bar-icon" href="1">
                <i className="fas fa-search" />
              </a>
              <div className="mobile-menu" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
