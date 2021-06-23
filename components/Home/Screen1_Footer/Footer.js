import React from "react";
// import '../../../styles/globals.css';
import Footer_Feature from "./Footer_Feature";

const Footer = () => {
  return (
    <div className="p-2 container mx-auto mt-30 md:container md:mx-auto">
      <p className="montserrat-30 text-center text-align: center text-4xl font-size: 2.25rem+-* m-1.5 margin: 0.375rem">
        <span>Title 1</span>
      </p>
      <p className=" mb-8	margin-bottom: 2rem montserrat-18 text-center text-align: center m-4 margin: 1rem">
        Here are the few categories that you can discuss, ask, answer, recommend
        here
      </p>
      <div className="flex flex-col md:flex-row montserrat-12 text-center text-align: center flex justify-around justify-content: space-around ">
        <Footer_Feature />
        <Footer_Feature />
        <Footer_Feature />
        <Footer_Feature />
        <Footer_Feature />
      </div>
    </div>
  );
};

export default Footer;
