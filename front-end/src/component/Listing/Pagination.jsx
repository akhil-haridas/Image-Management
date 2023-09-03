import React from 'react'

const Pagination = () => {
  return (
    <div className="row" style={{paddingBottom:"10rem"}}>
      <div className="col-lg-12 text-center">
        <div className="pagination-wrap">
          <ul>
            <li>
              <a href="#">Prev</a>
            </li>
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a className="active" href="#">
                2
              </a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">Next</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pagination
