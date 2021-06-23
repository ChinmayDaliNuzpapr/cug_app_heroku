import React, { useState, useEffect, useContext, createContext } from "react";
import { MainDataContext } from "../Layout";
const BoxComponent = () => {
  const { fetchedData } = useContext(MainDataContext);
  return (
    <div className="m-4">
      <div id="aggressiveBoxShadow" className=" ">
        <main className=" flex justify-center">
          <div className="flex flex-col md:min-w-full p-3 space-y-5 rounded-xl bg-white ">
            <section className="text-sm font-thin text-orange-400">
              {/* SOME RANDOM STRING */}
            </section>
            <section className="text-3xl text-center font-bold">
              Welcome to{" "}
              {fetchedData &&
                fetchedData.group_data &&
                fetchedData.group_data.Group_name}
            </section>
            <section className="font-normal text-md text-gray-700">
              {/* Have Fun <br /> */}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BoxComponent;
