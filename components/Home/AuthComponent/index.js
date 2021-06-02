import React from "react";
import sidebar_image from "../../../public/sidebar_image.jpeg";
const Index = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/3 bg-green-400 ">
        <div className="flex flex-col">
          <img src={sidebar_image} />
        </div>
      </div>
      <div className="flex-grow bg-blue-400 ">
        <div className="flex flex-col bg-gray-200 ">
          <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            <div className="flex flex-row w-full content-center">
              <p>
                <span>No.1</span>
                <br />
                Sub-Text
              </p>
              <p>
                <span>No.1</span>
                <br />
                Sub-Text
              </p>
              <p>
                <span>No.1</span>
                <br />
                Sub-Text
              </p>
            </div>
          </div>
          <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            2
          </div>
          <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
