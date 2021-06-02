import React from "react";
// import Button from "../Button/Button";
const subscribe = () => {
  return (
    <div className="grid grid-cols-1 gap-4 justify-center ">
      <div className="flex flex-col justify-center bg-blue-200 text-center items-stretch">
        <p className="self-center">
          <span className="text-blue-600 montserrat-18">
            Join our newsletter
          </span>
          <br />
          <span className="montserrat-24">
            Get latest and greatest updates on keeping yourself up to date
          </span>
        </p>
        <form className="w-full max-w-sm self-center">
          <div className="flex items-center border-b rounded-full py-2 px-4">
            <input
              className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-black"
              type="text"
              placeholder="Enter your Email"
              aria-label="Full name"
            />
            <button className="bg-blue-700 rounded-full py-2 px-4 hover:bg-transparent hover:bg-blue-500 text-white hover:text-white py-1 px-6 border border-blue-500 hover:border-transparent rounded">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default subscribe;
