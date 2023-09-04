import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Image from "../component/View/Image";
import Tags from "../component/View/Tags";
import Head from "../component/Home/Head";
import Breadcrumb from "../component/Listing/Breadcrumb";
import Footer from "../component/Footer/Footer";
import Spinner from "../component/Listing/Spinner"
import { getSingleImage } from "../utils/api"; 
import "../styles/Image.css";


const ViewPage = () => {

    const { id } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
      getSingleImage(id)
        .then((data) => {
        
          setImage(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [id]);
  
  
  return (
    <>
      <Head />
      <Breadcrumb />
      <div className="mt-150 mb-150">
        <div className="container">
          <div className="row">
                       {image ? (
              <>
                <Image image={image} />
                <Tags image={image} />
              </>
            ) : (
              <Spinner/>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ViewPage;
