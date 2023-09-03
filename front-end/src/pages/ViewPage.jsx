import React from 'react'
import Image from '../component/View/Image'
import '../styles/Image.css'
import Head from '../component/Home/Head'
import Breadcrumb from '../component/Listing/Breadcrumb'
const ViewPage = () => {
  return (
    <>
      <Head />
      <Breadcrumb />
      <Image />
    </>
  );
}

export default ViewPage
