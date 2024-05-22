import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./Layout.scss";
import "../../style/fonts.scss";
import { Header } from "./Header/Header.jsx";
import { Footer } from "./Footer/Footer.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
