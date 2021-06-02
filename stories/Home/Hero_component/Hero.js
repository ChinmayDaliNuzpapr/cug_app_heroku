import React from "react";
import image from "../../../public/GetImage.gif";
import "./hero.css";

function Hero() {
  return (
    <div className="bg-white">
      <div className="bg-white">
        <div class="grid grid-cols-2 gap-4">
          {/* Column-1 */}
          <div className="p-2">
            <p className="text-center">
              <div className="flex flex-col h-full">
                {/* color:bg-blue-200  */}
                {/* Row of the "Words" */}
                <div className="p-20">
                  <span className="text-4xl">Word 1 Word 2 Word 3</span>
                  <br />
                </div>
                {/* Row of the "text" */}
                <div className="p-20">
                  <span className="text-7xl">Text 1 Text 2 Text 3</span>
                  <br />
                </div>
                {/* Row of the "subtext" */}
                <div className="p-20">
                  <span className="text-5xl subtext_css">
                    Subtext 1 Subtext 2 Subtext 3
                  </span>
                  <br />
                </div>
              </div>
            </p>
          </div>
          {/* Column-2 */}
          <div className="p-2">
            <img alt="the_it_guy" src={image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

/*
<div className="bg-white">
      <div class="grid grid-cols-2 gap-4">
        {/* Column-1 /}
        <div className="p-2">
          <p className="text-center">
            <span className="text-2xl p-5">Word 1 Word 2 Word 3</span>
            <br />
            <span className="text-4xl p-5">Text 1 Text 2 Text 3</span>
            <br />
            <span className="text-3xl p-5 subtext_css">
              Subtext 1 Subtext 2 Subtext 3
            </span>
          </p>
        </div>
        {/* Column-2 /}
        <div className="p-2">
          <img alt="the_it_guy" src={image} />
        </div>
      </div>
    </div>
*/
