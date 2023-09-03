import React from "react";

const Filter = () => {
 
  return (
  
    <div class="row">
      <div class="col-md-12">
        <div class="product-filters">
          <ul>
            <li class="active" data-filter="*">All</li>
            <li data-filter=".strawberry">Newest</li>
            <li data-filter=".berry">Popularity</li>
            <li data-filter=".lemon">Relevence</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Filter
