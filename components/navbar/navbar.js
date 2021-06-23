import React, { useState, useContext } from "react";
import Link from "next/link";
import Sidebar from "../../components/Workflow/Sidebar";
import { XIcon, MenuIcon, DotsVerticalIcon } from "@heroicons/react/solid";

import { Transition } from "@headlessui/react";
import { UserContext, MainDataContext } from "../Layout";
// const category = [
//   "home",
//   "category 1",
//   "category 2",
//   "category 3",
//   "category 4",
//   "category 5",
//   "category 6",
//   "category 7",
//   "category 8",
//   "category 9",
//   "category 10",
//   "category 11",
//   "category 12",
//   "category 13",
// ];

function Nav(props) {
  const { fetchedData } = useContext(MainDataContext);
  const { setCategory } = props;
  const { authenticated, setAuthenticated } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  return (
    <div className="shadow-lg">
      <nav className="bg-white container mx-auto">
        <div className="max-w-full mx-auto p-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex flex-wrap md:min-w-full justify-between">
              {/* Options for list of categories */}
              <div id="category_option_button" className="my-auto">
                <div className="mr-2 flex-1  mr-[53px]">
                  <button
                    id="the_mobile_icon_navbar_button"
                    onClick={() => setIsCategory(!isCategory)}
                    type="button"
                    className="bg-blue-500 min-h-12 min-w-12 inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white-500 focus:ring-white"
                  >
                    <span className="sr-only">Open main menu</span>
                    {!isCategory ? (
                      <>
                        <DotsVerticalIcon />
                      </>
                    ) : (
                      <>
                        <XIcon />
                      </>
                    )}
                  </button>
                </div>
              </div>
              {/* The logo images */}
              <div className="md:block md:flex-1">
                <img className="h-8 w-8" src="/GetImage.jpeg" alt="Workflow" />
              </div>
              {/* List of nav-items icon */}
              <div className="hidden md:block flex-1">
                <div className="ml-10 flex items-baseline space-x-4 flex-end">
                  <div className="text-gray-900 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link href="#">Menu-1</Link>
                  </div>
                  <div className="text-gray-900 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link href="#">Menu-2</Link>
                  </div>

                  <div className="text-gray-900 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link href="#">Menu-3</Link>
                  </div>

                  <div className="text-gray-900 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link href="#">Menu-4</Link>
                  </div>
                  {/* 📌 THE CONTEXT FOR AUTHENTICATION */}
                  {authenticated === null ? (
                    <>
                      <div className="text-gray-900 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        <Link href="/Auth">Login</Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-gray-900 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        <button
                          onClick={() => {
                            localStorage.removeItem("token");
                            setAuthenticated(null);
                          }}
                        >
                          Logout
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* Hamburger icon to the right */}
            <div className="mr-2 flex md:hidden">
              <button
                id="the_mobile_icon_navbar_button"
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-500 min-h-12 min-w-12 inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white-500 focus:ring-white"
                // aria-controls="mobile-menu"
                // aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <>
                    <MenuIcon />
                  </>
                ) : (
                  <>
                    <XIcon />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="text-gray-900 text-center hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Menu-1
                </a>

                <a
                  href="#"
                  className="text-gray-900 text-center hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Menu-2
                </a>

                <a
                  href="#"
                  className="text-gray-900 text-center hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Menu-3
                </a>

                <a
                  href="#"
                  className="text-gray-900 text-center hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Menu-4
                </a>

                <a
                  href="#"
                  className="text-gray-900 text-center hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </a>
              </div>
            </div>
          )}
        </Transition>
        <Transition
          show={isCategory}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Sidebar category={category} />
                {/* {fetchedData !== null && (
                  <Sidebar
                    category={fetchedData.category}
                    category_func={setCategory}
                  />
                )} */}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
