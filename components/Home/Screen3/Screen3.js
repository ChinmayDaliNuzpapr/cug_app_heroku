import React from 'react';
import Screen3_Feature from './Screen3_Feature';
// import "../../../styles/globals.css";
// import image from "../../../public/GetImage.gif";

const Screen3 = () => {
  return (
    <div className="container mx-auto my-10 md:container md:mx-auto p-5">
      {/* The component heading */}
      <p className="montserrat-30 text-center text-align: center text-4xl font-size: 2.25rem+-* m-1.5 margin: 0.375rem">
        <span>Title 3</span>
      </p>
      <p className=" mb-8	margin-bottom: 2rem montserrat-18 text-center text-align: center m-4 margin: 1rem">
        2 lines of text is to be placed here
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Column-1 */}
        <div className="flex flex-col p-2 justify-end">
          {/* Single sub-coloumn */}
          <div className="p-2">
            <img alt="the_it_guy" src="/GetImage.gif" />
          </div>
        </div>

        {/* Column-2 */}
        <div className="flex flex-col p-2 justify-evenly">
          {/* Single sub-coloumn */}
          <div className="p-2">
            {/* Row-1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 auto-cols-max">
              <Screen3_Feature />
              <Screen3_Feature />
              <Screen3_Feature />
              <Screen3_Feature />
              <Screen3_Feature />
              <Screen3_Feature />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen3;
