import React, { useState, useEffect } from "react";

const topQuestion = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row content-center justify-between text-gray-900 text-center bg-blue-300 px-4 py-2">
        <div>
          <span>Title of the question</span>
        </div>
        <div>
          {open === false ? (
            <button onClick={() => setOpen(!open)}>V</button>
          ) : (
            <button onClick={() => setOpen(!open)}>^</button>
          )}
        </div>
      </div>
      {open && (
        <>
          <div className="flex flex-row content-center text-gray-900 text-justify bg-blue-300 px-4 py-2">
            <p>
              This is small answerThis is small answerThis is small answer This
              is small answer This is small answer This is small answer This is
              small answer This is small answer This is small answer This is
              small answer This is small answer This is small answer This is
              small answer This is small answer
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default topQuestion;
