import React from "react";
import Screen4_Feature from "./Screen4_Feature";
const Screen4 = () => {
  return (
    <div className="container mx-auto mt-30 md:container md:mx-auto p-5 mb-30">
      <p className="text-blue-900 montserrat-30 mb-16 margin-bottom: 4rem text-center  text-4xl font-size: 2.25rem+-* m-1.5 margin: 0.375rem">
        <span>Title 4</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <Screen4_Feature />
        <Screen4_Feature />
        <Screen4_Feature />
      </div>
    </div>
  );
};

export default Screen4;
