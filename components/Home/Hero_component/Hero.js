import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <div className="container mx-auto mt-30 md:container md:mx-auto">
      <div className="grid grid-col-1 md:grid-cols-2 gap-4 bg-white">
        {/* Column-1 */}
        <div className=" flex flex-col h-full justify-end">
          <div className="p-2">
            {/* color:bg-blue-200  */}
            {/* Row of the "Words" */}
            <div className="p-10">
              <span className="text-4xl text-center">Word 1 Word 2 Word 3</span>
              <br />
            </div>
            {/* Row of the "text" */}
            <div className="p-10">
              <span className="text-7xl text-center">Text 1 Text 2 Text 3</span>
              <br />
            </div>
            {/* Row of the "subtext" */}
            <div className="p-10">
              <span className="text-5xl subtext_css text-center">
                Subtext 1 Subtext 2 Subtext 3
              </span>
              <br />
            </div>
          </div>
        </div>
        {/* Column-2 */}
        <div className="flex flex-col h-full justify-end">
          <div className="p-2 ">
            <div className="pb-0">
              <img
                // width={650}
                // height={650}
                alt="the_it_guy"
                src="/GetImage.gif"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
