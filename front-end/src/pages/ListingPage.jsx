import React from "react";
import "../styles/Collection.css";
import Head from '../component/Home/Head'
import Breadcrumb from "../component/Listing/Breadcrumb";
import Filter from "../component/Listing/Filter";
import Card from "../component/Listing/Card";
import Pagination from "../component/Listing/Pagination";
const ListingPage = () => {
  return (
    <>
      <Head />
      <Breadcrumb />
      	<div class="product-section mt-150 mb-150">
        <div class="container">
          <Filter />
          <Card />
          <Pagination/>
          </div>
    </div>
    </>
  );
};

export default ListingPage;
