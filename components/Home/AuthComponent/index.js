import React from "react";
import FormTailwind from "./FormTailwind.js";
import { Signup } from "./SignUp.js";
const Index = () => {
  return (
    <div className="flex flex-row h-screen">
      {/* The left side image */}
      <div className="w-1/5">
        <div className="flex flex-col">
          <img
            className="h-screen image_full_screen"
            src="/sidebar_image.jpeg"
          />
        </div>
      </div>
      {/* The right-side content */}
      <div className="flex-grow">
        {/* Every item will be on below another */}
        <div className="grid grid-col-1 content-evenly gap-4">
          {/* Row-1 for no-1,2,3 text */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-4xl p-4">
            <div>
              <p>No-1</p>
              <span>Subtext</span>
            </div>
            <div>
              <p>No-1</p>
              <span>Subtext</span>
            </div>
            <div>
              <p>No-1</p>
              <span>Subtext</span>
            </div>
          </div>
          {/* Row-2: A big font spread across 2 lines */}
          <div className="w-full text-center text-7xl p-4">
            <p className="">A text that spans across 2 lines</p>
          </div>
          {/* Row-3: 2 button in pill */}
          <div
            id="the_form_div"
            className="w-full flex flex-col flex-wrap gap-4 p-4"
          >
            <div className="container-fluid mx-auto">
              <FormTailwind />
            </div>
          </div>
          {/* Row-4: A notification text */}
          <div className="w-full flex flex-col flex-wrap p-4">
            <div className="flex flex-row flex-wrap justify-center text-2xl">
              <p className="mx-4">
                We will send a validation link on your email provided above​ You
                will then be provided access to you​
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
