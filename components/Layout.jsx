import React from "react";
import Navbar from "../components/navbar/navbar";
import FooterPage from "../components/FooterPage";
const Layout = ({ children }) => {
  console.log("THE CHILD", children);
  return (
    <div>
      <Navbar />
      <>
        <div>{children}</div>
      </>
      <FooterPage />
    </div>
  );
};

export default Layout;
