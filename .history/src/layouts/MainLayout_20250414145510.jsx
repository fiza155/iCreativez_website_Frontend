// src/layouts/MainLayout.jsx
import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      <main>{children}</main> {/* This will render the page content */}
      <Footer />
    </div>
  );
};

export default MainLayout;
