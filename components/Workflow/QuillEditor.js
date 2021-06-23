import React from "react";

import { useQuill } from "react-quilljs";

// import "quill/dist/quill.snow.css"; // Add css for snow theme

const QuillEditor = ({ handleChangeFunc, ...props }) => {
  const theme = "snow";
  const modules = {
    toolbar: [["bold", "italic", "underline", "strike"]],
  };

  const placeholder = "Compose an epic...";

  const formats = ["bold", "italic", "underline", "strike"];

  // Quill ref has been used for a reason
  const { quill, quillRef } = useQuill({
    theme,
    // modules,
    // formats,
    placeholder,
  });
  // React.useEffect(() => {
  //   if (quill) {
  //     quill.clipboard.dangerouslyPasteHTML(
  //       "<h1>Enter your response here!</h1>"
  //     );
  //   }
  // }, [quill]);
  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        console.log("Text change!");
        handleChangeFunc(quillRef);
      });
    }
  }, [quill]);

  console.log("The Quill", quill); // undefined > Quill Object
  console.log("The Quill REF", quillRef); // { current: undefined } > { current: Quill Editor Reference }
  return (
    <div style={{ width: "100%", height: "200px" }}>
      <div ref={quillRef} />
    </div>
  );
};

export default QuillEditor;
