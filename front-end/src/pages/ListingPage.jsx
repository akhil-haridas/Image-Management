import React, { useState, useEffect } from "react";
import "../styles/Collection.css";
import Head from "../component/Home/Head";
import Breadcrumb from "../component/Listing/Breadcrumb";
import Filter from "../component/Listing/Filter";
import Card from "../component/Listing/Card";
import Pagination from "../component/Listing/Pagination";
import Footer from "../component/Footer/Footer";
import Spinner from "../component/Listing/Spinner";
import { getImages } from "../utils/api";


const ListingPage = () => {
  const [images, setImages] = useState([]);
 const [isLoading, setIsLoading] = useState(false); 
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {

    setIsLoading(true);
    try {
      const response = await getImages();
      setImages(response);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
      <Head />
      <Breadcrumb />
      <div className="latest-news mb-150">
        <div className="container">
          <Filter />
          <div className="row">
            <Card images={images} />
          </div>
          <Pagination />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListingPage;
