import React from "react";
import Screen3_Feature from "./Screen3_Feature";
// import "../../../styles/globals.css";
// import image from "../../../public/GetImage.gif";

const Screen3 = () => {
  return (
    <div className="bg-blue-200 p-5 mb-60">
      <div className="mb-8">
        <p className=" text-blue-900 montserrat-30 text-center  text-4xl font-size: 2.25rem+-* m-1.5 margin: 0.375rem">
          <span>Title 3</span>
        </p>
        <p className="montserrat-18 text-center text-align: center m-4 margin: 1rem">
          2 lines of text is to be placed here
        </p>
      </div>
      <div>
        <div className=" flex justify-around">
          <div>
            <img className="h-300 m-auto margin: auto" src="/GetImage.gif" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">
            <Screen3_Feature />
            <Screen3_Feature />
            <Screen3_Feature />
            <Screen3_Feature />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen3;
