import "./index.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

import React from "react";

function Layout() {
  return (
    <div className="App">
      <Header />
      <div className="page">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
