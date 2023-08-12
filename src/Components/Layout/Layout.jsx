import React from "react";
import Navbars from "../Nav/Navbars";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import DropUp from "../DropUp/DropUp";
// <Home/>
const Layout = () => {
  return (
    <>

      <Navbars />
      <DropUp  />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
