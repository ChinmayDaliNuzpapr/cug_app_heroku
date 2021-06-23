import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2 py-2">
      <label
        className={`block text-gray-700 text-2xl font-bold my-4`}
        htmlFor={field.name}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border hover:border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline w-100"
        {...field}
        {...props}
        autoComplete="off"
      />
      {/* {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null} */}
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};

const category_list = [
  "home",
  "category 1",
  "category 2",
  "category 3",
  "category 4",
  "category 5",
  "category 6",
  "category 7",
  "category 8",
  "category 9",
  "category 10",
  "category 11",
  "category 12",
  "category 13",
];

export const SelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="w-full flex flex-col mb-3">
        <label className={`font-semibold text-gray-600 py-2`}>
          {label}
          <abbr title="required">*</abbr>
        </label>
        <select
          className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full py-2"
          required="required"
        >
          {category_list.map((item, index) => (
            <option key={index} value={`${item}`}>
              {item}
            </option>
          ))}
        </select>

        <p className="text-sm text-red-500 hidden mt-3" id="error">
          Please fill out this field.
        </p>
      </div>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      <ErrorMessage component="div" name={field.name} className="error" />
    </>
  );
};
