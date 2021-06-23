import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MainDataContext } from "../../components/Layout";

const activeString =
  "bg-white border-green-500 hover:bg-blue-600 text-gray-900 shadow-light xl:shadow-none xl:px-4 border-r-8 mb-2 px-auto border-gray-900 hover:text-white hover:font-bold";
// bg-blue-300
const deactiveString =
  "mb-2 px-auto text-gray-900 border-gray-900 hover:bg-blue-600 hover:font-bold rounded rounded-lg";
const Sidebar = (props) => {
  const { fetchedData, setFetchedData } = useContext(MainDataContext);

  // console.log("THE PROPS of CATEGORY", props);
  // const { category, category_func } = props;

  return (
    <>
      <div className="hidden md:block bg-blue-200 p-2 flex justify-center rounded-lg">
        <div className="rounded bg-grey-light text-center md:w-[150px] lg:w-[250px] p-2">
          <div className="px-auto py-1">
            <h3 className="text-2xl text-center">Workspace</h3>
          </div>
          <div className="text-base mt-2">
            <ul className="">
              {fetchedData.category.category_list &&
                fetchedData.category.category_list.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={
                        item._id === fetchedData.category.current_category
                          ? activeString
                          : deactiveString
                      }
                      onClick={() => {
                        console.log("THE CATEGORY ID", item._id);
                        if (props.fetchingDataOfNewCategory) {
                          props.fetchingDataOfNewCategory(item._id);
                        }
                      }}
                    >
                      <div className="bg-white p-4 rounded mt-1 cursor-pointer hover:bg-blue-600 hover:text-gray-100">
                        <i className="far fa-chart-bar mr-1"></i>
                        <span>{item.categoryName}</span>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
    // <>
    //   <div className="hidden md:block md:w-[150px] lg:w-[250px]">
    //     <nav className="flex flex-col w-64 h-screen px-auto tex-gray-900 border rounded-lg border-gray-200">
    //       <div className="flex flex-wrap bg-blue-300">
    //         <div className="w-1/2 justify-center my-4 mx-auto">
    //           <p className="text-3xl text-center">Workspace</p>
    //         </div>
    //       </div>
    //       <div className="mt-10 mb-4">
    //         <ul className="">
    //           {fetchedData.category.category_list &&
    //             fetchedData.category.category_list.map((item, index) => {
    //               return (
    //                 <li
    //                   key={index}
    //                   className={
    //                     item._id === fetchedData.category.current_category
    //                       ? activeString
    //                       : deactiveString
    //                   }
    //                   onClick={() => {
    //                     console.log("THE CATEGORY ID", item._id);
    //                     if (props.fetchingDataOfNewCategory) {
    //                       props.fetchingDataOfNewCategory(item._id);
    //                     }
    //                   }}
    //                 >
    //                   <div className="ml-4">
    //                     <span>{item.categoryName}</span>
    //                   </div>
    //                 </li>
    //               );
    //             })}
    //         </ul>
    //       </div>
    //     </nav>
    //   </div>
    // </>
  );
};

export default Sidebar;

const SidebarTwo = () => {
  return (
    <>
      <div className="bg-blue-200 md:w-[200px] lg:w-[300px] p-2 flex justify-center rounded-lg">
        <div className="rounded bg-grey-light w-64 p-2">
          <div className="flex justify-between py-1">
            <h3 className="text-2xl text-center">Workspace</h3>
          </div>
          <div className="text-base mt-2">
            <ul className="">
              {fetchedData.category.category_list &&
                fetchedData.category.category_list.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={
                        item._id === fetchedData.category.current_category
                          ? activeString
                          : deactiveString
                      }
                      onClick={() => {
                        console.log("THE CATEGORY ID", item._id);
                        if (props.fetchingDataOfNewCategory) {
                          props.fetchingDataOfNewCategory(item._id);
                        }
                      }}
                    >
                      <div className="ml-4">
                        <span>{item.categoryName}</span>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
