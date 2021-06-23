/* -------------------------------------------------
Since we want to store the data regarding category 
between different page renders we will create a context for that.
  
*/
import React, { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "../components/navbar/navbar";
import FooterPage from "../components/FooterPage";
import Sidebar from "../components/Workflow/Sidebar";
import Loading from "./Loading";
const whiteListForSidebar = ["/question", "/question/[id]", "/questions"];

export const UserContext = createContext(null);
export const MainDataContext = createContext(null);

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);
  const [authenticated, setAuthenticated] = useState(null);
  const router = useRouter();

  // console.log("router ----->", router);

  // Initially we fetched all the questions from default category ie "60c1d3759e4b0d08706a9a3d"
  // from the API itself when, fetchedData is null.
  // we will use setCategory function in the place of "fetchDataBaseOnCategory"

  useEffect(() => {
    console.log("THE FIRST USE_EFFECT WITH NO PARAMETERS");
    setLoading(true);
    axios
      .get(`${process.env.PRODUCTION}/api/question/category`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      })
      .then((res) => {
        console.log("THE RES Data in LAYOUT", res);
        setFetchedData({
          category: {
            category_list: res.data.categories,
            current_category: res.data.categories[0]._id,
          },
          questions: res.data.questions,
          group_data: res.data.currentGroup,
        });
        setLoading(false);
        localStorage.setItem("group_id", res.data.currentGroup._id);
      })
      .catch((err) => alert(err));
  }, []);

  //[📌] Everytime the category changes we need to fetch a new set of questions
  //[📌] Everytime the new data is fetched we need to update category state.
  function fetchingDataOfNewCategory(category_id) {
    router.push(`${process.env.PRODUCTION}`);

    console.log("THE ID OF CATEGORY", category_id);
    console.log("THE LOCAL HOST OF ", localStorage.getItem("jwt_token"));
    axios
      .post(
        `${process.env.PRODUCTION}/api/question/category`,
        { category: category_id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
          },
        }
      )
      .then((res) => {
        console.log("THE RES Data in SIDEBAR", res);
        setFetchedData({
          ...fetchedData,
          category: {
            category_list: res.data.categories,
            current_category: category_id,
          },
          questions: res.data.questions,
        });
        setLoading(false);
      })
      .catch((err) => console.log("😈😈😈😈", err));
  }

  console.log("THE FETCHED-DATA IN THE BASE LAYOUT", fetchedData);
  return (
    <UserContext.Provider value={{ authenticated, setAuthenticated }}>
      <MainDataContext.Provider
        value={{ fetchedData, setFetchedData, loading, setLoading }}
      >
        <div id="base_layout">
          <div id="layout_navbar_div2" className="sticky top-0 bg-white z-50">
            <Navbar />
          </div>
          <div>
            {whiteListForSidebar.includes(`${router.pathname}`) ? (
              <React.Fragment>
                {loading === false ? (
                  <>
                    <div className="container mx-auto">
                      <div className="flex flex-col my-16">
                        <div className="flex flex-row">
                          <div className="hidden md:block">
                            <div
                              id="sidebar_div"
                              className="md:w-full md:w-1/2 lg:w-1/4 px-2 mb-4"
                            >
                              {fetchedData !== null && (
                                <Sidebar
                                  fetchingDataOfNewCategory={
                                    fetchingDataOfNewCategory
                                  }
                                />
                              )}
                            </div>
                          </div>
                          <div className="flex-grow w-full lg:w-1/2 px-2">
                            <React.Fragment>{children}</React.Fragment>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Loading />
                )}
              </React.Fragment>
            ) : (
              <>
                <React.Fragment>{children}</React.Fragment>
              </>
            )}
          </div>

          <div id="layout_footer_div">
            <FooterPage />
          </div>
        </div>
      </MainDataContext.Provider>
    </UserContext.Provider>
  );
};

export default Layout;
