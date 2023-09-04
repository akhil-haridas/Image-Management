import React from 'react'
import AddImage from '../component/Adding/AddImage'
import "../styles/AddImage.css";
import Head from '../component/Home/Head';
import Breadcrumb from '../component/Listing/Breadcrumb';
import Footer from '../component/Footer/Footer';
const AddPage = () => {
  return (
    <>
      <Head />
      <Breadcrumb />
      <AddImage />
      <Footer/>
   </>
  )
}

export default AddPage
