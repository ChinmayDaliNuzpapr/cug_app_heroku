import React from "react";
import Image from "next/image";
// import image from "../../../public/GetImage.gif";
// import category_image from "../../../public/category_placeholder.svg";
import Screen3_Feature from "../Screen3/Screen3_Feature";
const title2 = () => {
  return (
    <div className="title2_css ">
      <p className="montserrat-30 text-center text-align: center text-4xl font-size: 2.25rem+-* m-1.5 margin: 0.375rem">
        <span>Title 2</span>
      </p>
      <p className=" mb-8	margin-bottom: 2rem montserrat-18 text-center text-align: center m-4 margin: 1rem">
        Here are the few categories that you can discuss, ask, answer, recommend
        here
      </p>
      <div className="grid grid-cols-2 gap-4">
        {/* Column-1 */}
        <div className="flex flex-col p-2 justify-end">
          {/* Single sub-coloumn */}
          <div className="p-10">
            {/* Row-1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">
              <Screen3_Feature />
              <Screen3_Feature />
              <Screen3_Feature />
              <Screen3_Feature />
              <Screen3_Feature />
              <Screen3_Feature />
            </div>
          </div>
        </div>
        {/* Column-2 */}
        <div className="p-2">
          <img
            // width="1000"
            // height="1000"
            alt="the_it_guy"
            src="/GetImage.gif"
          />
        </div>
      </div>
    </div>
  );
};

export default title2;
