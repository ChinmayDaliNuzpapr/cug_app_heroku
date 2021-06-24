import React from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { MainDataContext } from "../Layout";
const SearchBar = () => {
  const [searchtext, setSearchText] = React.useState("");
  const { fetchedData, setFetchedData, setLoading } =
    React.useContext(MainDataContext);
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("THE VALUE ", searchtext);
    if (searchtext[0] === "#") {
      console.log("THE SUBSTRING", searchtext.substring(1));
      axios
        .post(
          `${process.env.PRODUCTION}/api/search/question`,
          {
            search: searchtext.substring(1),
            searchBy: "tag",
            scope: "company", // set this as the current scope
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
            },
          }
        )
        .then((res) => {
          console.log("THE RES Data COMPANY/SCOPE", res);
          setFetchedData({ ...fetchedData, questions: res.data.question });
          // setLoading(false);
        })
        .catch((err) => console.log("😈😈😈😈", err));
    } else {
      axios
        .post(
          `${process.env.PRODUCTION}/api/search/question`,
          {
            search: searchtext,
            searchBy: "title",
            scope: "company",
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
            },
          }
        )
        .then((res) => {
          console.log("THE RES Data COMPANY/SCOPE", res);
          setFetchedData({ ...fetchedData, questions: res.data.question });
          setLoading(false);
        })
        .catch((err) => console.log("😈😈😈😈", err));
    }
  };

  return (
    <>
      {/* <Formik> */}
      <form id="searchbar" onSubmit={onFormSubmit}>
        <input
          id="searchbar_input"
          type="search"
          name="search"
          value={searchtext}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <i id="search_icon" className="fa fa-search"></i>
      </form>
      {/* </Formik> */}
    </>
  );
};

export default SearchBar;

// const SearchTextField= ({props}) => {
//   return(

//     )
// }
