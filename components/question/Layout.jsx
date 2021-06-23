import React, { useState, useEffect } from "react";
import { Trending, ExtraTrendingBox } from "../../components/Workflow/Trending";
import BoxComponent from "../../components/question/BoxComponent";
import QuestionCard from "../../components/QuestionCard";
import QuestionComponent from "../../components/QuestionComponent";
const Layout = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(false);
  return (
    <>
      <div className="w-full lg:w-1/2 px-2">
        {/* THE HERO COMPONENT */}
        {selectedQuestion ? (
          <>THE ENTIRE QUESTION DETAILS WILLL BE DISPLAYED</>
        ) : (
          <>
            <BoxComponent />
            <QuestionComponent />
          </>
        )}
      </div>
      <div className="sr-only w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
        {/* flex-grow sm:hidden */}
        <ExtraTrendingBox />
      </div>
    </>
  );
};

export default Layout;
