import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Comment from "../../components/Workflow/Comment";
import { ExtraTrendingBox } from "../../components/Workflow/Trending";
import Unanswered from "../../components/Workflow/Unanswered";
import { DetailsComponent } from "../../components/question/DetailsComponent";
import { MyDialog } from "../../components/question/AnswerDialogBox";

function Question() {
  const router = useRouter();
  console.log("THE PATHNAME", router.pathname);
  const [question, setQuestions] = useState();
  const [answer, setAnswer] = useState();
  let [isOpen, setIsOpen] = useState(false);
  //process.env.DEVELOPMENT is undefined
  console.log("THE TOGGLER FOR MODAL", isOpen);
  useEffect(async () => {
    if (router.asPath !== router.route) {
      const { id } = router.query;

      console.log("ROUTER QUERY", router.query);
      console.log("ID IS", id);

      const url = `${process.env.DEVELOPMENT}/api/question/${id}`;
      console.log("URL IS ", url);
      const token = localStorage.getItem("jwt_token");

      console.log("TOKEN IS ", token);
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data;
        setQuestions(data.question);
        setAnswer(data.answer);
      } catch (err) {
        console.log(err);
      }
    }
  }, [router]);

  return (
    <>
      {/* For now flex seems only option , otherwise custom css is to be written  */}
      <div className="flex flex-row flex-wrap">
        {/* <div className="w-2/8">SIDEBAR IS TO BE ADDED</div> */}
        <div className="flex-grow">
          {isOpen === false ? (
            <>
              {/* This will display the details  */}
              <div className="mb-8 ">
                {console.log("THE DETAILS OF THE QUESTION", question)}
                {question && (
                  <DetailsComponent
                    title={question.article.title}
                    content={question.article.content}
                    view={question.view.count ? question.view.count : 0}
                    like={question.article.like}
                    comments={answer ? answer.length : 0}
                    author={question.article.author}
                    tags={question.tags ? question.tags : []}
                  />
                )}
              </div>
              <div className="mb-2 flex justify-between">
                {answer && answer.length == 0 && (
                  <div>
                    <Unanswered />
                  </div>
                )}

                {answer && answer.length != 0 && (
                  <div>{answer && answer.length} answers</div>
                )}
                <div className="flex items-center">
                  <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-1 px-6 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => setIsOpen(true)}
                  >
                    Add Answer
                  </button>
                </div>
              </div>
              <div>
                {answer && (
                  <div>
                    {answer.map((item, index) => {
                      return <Comment key={index} answer={item} />;
                    })}
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} />
            </>
          )}
        </div>
        <div className="hidden md:block ml-4 flex-grow-0">
          <ExtraTrendingBox />
        </div>
      </div>
    </>
  );
}

export default Question;
