import React, { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
// Custom component for forms
import { TextField, SelectField } from "../../Home/AuthComponent/TextField.js";
import { MyToggle } from "../menu/MenuComponent";
import { ExtraTrendingBox } from "../../Workflow/Trending.js";
import QuillEditor from "../../Workflow/QuillEditor";
import { MainDataContext } from "../../Layout.jsx";

// ===============================================
/*                      🌟NOTES:🌟
    - initially I have to fetch list of all the unique tags
      Get the property of category from the base component and
      set it as the active category 
    -
*/
// ===============================================

export const colourOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
  { value: "forest", label: "Forest" },
  { value: "slate", label: "Slate" },
  { value: "silver", label: "Silver" },
];

const CreateQuestionForm = (props) => {
  const [post, setPost] = useState({ response_value: "", posted: null });
  const { fetchedData } = React.useContext(MainDataContext);
  const [editorHtml, setEditorHtml] = useState(null);
  const [tags, setTags] = useState([]);
  console.log("THE VALUES IN THE EDITOR", editorHtml);
  const handleChange = (html) => {
    console.log("THE STATE", editorHtml);
    setEditorHtml(html);
  };

  const handleChangeTag = (newValue, actionMeta) => {
    console.group("Value Changed", newValue);

    console.log(`action: ${actionMeta.action}`);
    let tag_array = [];
    newValue.map((item) => {
      console.log("EACH ITEM IN THE ARRAY", item.value);
      tag_array.push(item.value);
    });
    console.log("THE TAG ARRAY", tag_array);
    setTags(tag_array);
  };

  const postAQuestion = (details) => {
    console.log("THE OBJECT WITH DATA", details);
    console.log("THE EDITOR VALUE", editorHtml);
    console.log("THE EDITOR VALUE", localStorage.getItem("group_id"));
    details = { ...details, content: editorHtml };
    let postBody = {
      categoryID: details.category,
      groupID: localStorage.getItem("group_id"),
      article: {
        title: details.title,
        author: localStorage.getItem("alphaNumericId"),
        content: editorHtml.current.innerHTML,
        scope: details.scope,
      },
      tags: tags,
    };
    // postBody = JSON.stringify(postBody);
    console.log("THE FINAL DETAILS", postBody);
    // THE AXIOS REQUEST
    axios
      .post(`${process.env.PRODUCTION}/api/question/post`, postBody, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      })
      .then((response) => {
        console.log("THE RESPONSE", response);
        setPost({ posted: true, response_value: response.data.message });
      })
      .catch((err) => {
        console.log("🧨🧨🧨🧨", err);
        console.log(JSON.stringify(err));
        console.log(err.response);
        setPost({ posted: false, response_value: err.response.message });
      });
  };

  useEffect(() => {
    if (post.posted === true) {
      // router.push("/verification");
      toast.success(`${post.response_value}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (post.posted === false) {
      toast.error(`${post.response_value}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else;
  }, [post]);

  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="flex flex-col">
          <div className="px-4">
            <div className="w-full mx-auto sm:px-12 lg:px-8">
              <button
                onClick={() => {
                  console.log("THE PROPS AND CLICKED", props);
                  props.setAskQuestion(false);
                }}
              >
                Go Back
              </button>
              <div className="bg-white overflow-hidden shadow-xl rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200">
                  <Formik
                    initialValues={{
                      title: "",
                      scope: "",
                      tags: [],
                      category: fetchedData.category.current_category,
                    }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                      console.log("ALL THE VALUES", values);
                      postAQuestion(values);
                      setTimeout(() => {
                        resetForm();
                        setSubmitting(false);
                      }, 3000);
                    }}
                  >
                    {(props) => (
                      <Form className="bg-white shadow-md rounded px-8 mb-4 py-16">
                        {console.log("PROPS IN FORM", props)}
                        <span className="text-4xl">Ask A Question</span>
                        {/* THE TITLE */}
                        <div className="mb-4 w-100">
                          <TextField label="Title" name="title" type="text" />
                        </div>
                        <div className="flex flex-row flex-wrap justify-between">
                          <div className="flex flex-row flex-wrap justify-evenly">
                            {/* The select field */}

                            <>
                              <div
                                role="group"
                                aria-labelledby="my-radio-group"
                              >
                                <label>
                                  <Field
                                    type="radio"
                                    name="scope"
                                    value="company"
                                  />
                                  Company
                                </label>
                                <label>
                                  <Field
                                    type="radio"
                                    name="scope"
                                    value="global"
                                  />
                                  Global
                                </label>

                                <div>Picked: {props.values.scope}</div>
                              </div>
                            </>
                          </div>
                          {/* LIST OF CATEGORY */}
                          <div>
                            <label className="mr-2">Categories:</label>
                            <Field
                              component="select"
                              // id="category"
                              name="category"
                              // multiple={true}
                            >
                              {fetchedData.category.category_list.map(
                                (item, index) => (
                                  <option
                                    className="border-2"
                                    key={index}
                                    value={`${item._id}`}
                                  >
                                    {item.categoryName}
                                  </option>
                                )
                              )}
                            </Field>
                          </div>
                        </div>
                        {/* Text-Editor */}
                        <div className="mx-auto my-4 w-100">
                          <label className="text-xl text-gray-600">
                            Content <span className="text-red-500">*</span>
                          </label>
                          <br />

                          <QuillEditor handleChangeFunc={handleChange} />
                        </div>
                        {/* MULTIPLE TAGS OPTION */}
                        <div className="mt-24">
                          <label className="text-xl text-gray-900">Tags</label>
                          <CreatableSelect
                            isMulti
                            onChange={handleChangeTag}
                            options={colourOptions}
                          />
                        </div>

                        <div className="flex p-1">
                          {/*[📌] The code is commented right-now but will be used when the workflow is complete.
                            THE BELOW CODE WILL SAVE it as draft 
                            or publish the user can save it as a draft by setting the boolean field */}
                          {/* <select
                          className="border-2 border-gray-300 border-r p-2 m-2"
                          name="action"
                        >
                          <option>Save and Publish</option>
                          <option>Save Draft</option>
                        </select> */}
                          <button
                            className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                          >
                            {props.isSubmitting ? `Loading...` : "submit"}
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Displaying the trending section */}
        <div>
          <ExtraTrendingBox
            category_id={fetchedData.category.current_category}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateQuestionForm;

/***
 * Better styled 
 * <div className="flex m-4">
                          <SelectField
                            label="Category"
                            name="category"
                            type="select"
                          />
                        </div>
 * 
 * 
 */
