import React from "react";
import "../assets/css/defaults.css";

import Footer from "../components/Footer/Footer";
import TopHeader from "../components/header/TopHeader"

const Layout = ({ children }) => {
  return (
    <>
     <TopHeader/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
