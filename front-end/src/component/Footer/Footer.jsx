import React from 'react'

const Footer = () => {
  return (
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <p>
              Copyrights © 2019 -{" "}
              <a href="https://imransdesign.com/">Imran Hossain</a>, All Rights
              Reserved.
              <br />
              Distributed By - <a href="https://themewagon.com/">Themewagon</a>
            </p>
          </div>
          <div className="col-lg-6 text-right col-md-12">
            <div className="social-icons">
              <ul>
                <li>
                  <a href="1" target="_blank">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="1" target="_blank">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="1" target="_blank">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="1" target="_blank">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="1" target="_blank">
                    <i className="fab fa-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
