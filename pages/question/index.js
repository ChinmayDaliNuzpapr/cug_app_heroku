/* In this component we will initially fetch latest 10 questions of the home-category
 we will create a context-hook to serve all the questions or new queries based on sort-by
 when someone clicks on different category on the left side:-
  👉 we will create a global store here where the latest fetched 10 questions will be stored.
  👉 we will create a global store for list of category
  👉 we will also store the links of top 10 trending question pertaining to that group
// Incorrect thought process👇
 🚩 we will use useCallback but one failure would be this will query uncessarily the same 10 question over and over
*/
import React, { useState, useEffect, useContext, createContext } from "react";
import BoxComponent from "../../components/question/BoxComponent";
import QuestionCard from "../../components/QuestionCard";
import CreateQuestionForm from "../../components/question/article/CreateQuestionForm";
import QuestionComponent from "../../components/QuestionComponent";
import Sidebar from "../../components/Workflow/Sidebar";
import { useRouter } from "next/router";
import { UserContext, MainDataContext } from "../../components/Layout";

const index = () => {
  const { fetchedData } = useContext(MainDataContext);
  const [askQuestion, setAskQuestion] = useState(null);
  console.log("DATA IN INDEX.JS file of Question", fetchedData);
  function askingAQuestionfunc() {
    setAskQuestion(true);
  }
  const router = useRouter();

  return (
    <>
      {askQuestion === false || askQuestion === null ? (
        <>
          <BoxComponent />
          <QuestionComponent
            x={"value"}
            askingAQuestionfunc={askingAQuestionfunc}
            listOfQuestions={fetchedData.questions}
          />
        </>
      ) : (
        <CreateQuestionForm setAskQuestion={setAskQuestion} />
      )}
    </>
  );
};

export default index;
