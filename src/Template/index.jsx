/* eslint-disable react/prop-types */
import React, { Fragment } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Template = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Template;
