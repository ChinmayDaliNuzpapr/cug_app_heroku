import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import HomePage from "../components/HomePage";
import FooterPage from "../components/FooterPage";
import Question from "../components/Workflow/Question";
import Sidebar from "../components/Workflow/Sidebar";
import Trending from "../components/Workflow/Trending";
import Subscribe from "../components/Home/subscribe_component/subscribe";
import TopQuestion from "../components/Home/subscribe_component/topQuestion";
const Layout = ({ children }) => {
  console.log("THE CHILD", children);
  return (
    <div>
      <>
        <div>
          <Navbar />

          <HomePage />

          <FooterPage />
        </div>
      </>
    </div>
  );
};

export default Layout;
