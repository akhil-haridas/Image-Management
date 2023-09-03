import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ListingPage from "../pages/ListingPage";
import ViewPage from "../pages/ViewPage";
import AddPage from "../pages/AddPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage"
const ImageRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/collections" exact element={<ListingPage />} />
      <Route path="/image" exact element={<ViewPage />} />
      <Route path="/addimage" exact element={<AddPage />} />
      <Route path="/signin" exact element={<LoginPage />} />
      <Route path="/signup" exact element={<SignupPage />} />
    </Routes>
  );
}

export default ImageRoutes;
