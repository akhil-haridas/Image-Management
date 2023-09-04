import React from 'react'

const Pagination = () => {
  return (
    <div className="row">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="pagination-wrap">
              <ul>
                <li>
                  <a href="1">Prev</a>
                </li>
                <li>
                  <a href="1">1</a>
                </li>
                <li>
                  <a className="active" href="1">
                    2
                  </a>
                </li>
                <li>
                  <a href="1">3</a>
                </li>
                <li>
                  <a href="1">Next</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagination
