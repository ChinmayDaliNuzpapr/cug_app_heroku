import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import QuestionComponent from "../../components/Workflow/Question";
import Comment from "../../components/Workflow/Comment";
import { ExtraTrendingBox } from "../../components/Workflow/Trending";
import Sidebar from "../../components/Workflow/Sidebar";
import Unanswered from "../../components/Workflow/Unanswered";
import Button from "../../components/Button/Button";
import axios from "axios";
import { useQuill } from "react-quilljs";

const DetailsComponent = (props) => {
  return (
    <div className="my-4 p-3 rounded-md border-2 w-full">
      {/* Title Div */}
      <div className="mb-4">
        <span className="text-2xl md:text-5xl font-medium">{props.title}</span>
      </div>
      {/* Content Div */}
      <div className="text-sm md:text-lg text-gray-500 font-light mb-8">
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </div>
      {/* Tag div */}
      <div className="mb-4">
        <div className="">
          {props.tags.map((item, index) => (
            <React.Fragment key={index}>
              <span className="inline-block bg-blue-300 px-3 py-2 text-sm font-semibold mr-2 text-gray-700 rounded-lg">
                {item}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="py-2">
        <span>posted by: {props.author}</span>
      </div>
      {/* Views/Comments/Likes count & authored-by Div */}
      <div className="-bottom-0">
        <div className="flex justify-between text-sm ">
          <div className="flex">
            <div className="mr-4 flex justify-start">
              <div className="w-[20px] h-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <div className="">{props.view}</div>
            </div>
            <div className="mr-4 flex justify-start">
              <div className="w-[20px] h-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </div>
              <div className="">{props.like}</div>
            </div>
            <div className="mr-4 flex justify-start">
              <div className="w-[20px] h-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <div className="">{props.comments}</div>
            </div>
          </div>
          <div className="flex justify-start">
            <div>
              <div className="w-[20px] h-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function MyDialog({ isOpen, setIsOpen }) {
  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      as="div"
      id="modal_dialog"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "90vh",
        zIndex: 1,
      }}
      // className="absolute inset-0 z-10 flex items-center justify-center overflow-y-auto"
    >
      {/* absolute top-0 z-10 flex items-center justify-center overflow-y-auto */}
      <div className="flex flex-col bg-gray-800 text-white w-96 py-8 px-4 text-center">
        <Dialog.Overlay />

        <Dialog.Title className="text-red-500 text-3xl">
          Deactivate account
        </Dialog.Title>
        <Dialog.Description className="text-xl m-2">
          This will permanently deactivate your account
        </Dialog.Description>

        <p className="text-md m-4">
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button
          className="w-full m-4 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => setIsOpen(false)}
        >
          Deactivate
        </button>
        <button
          className="m-4 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </button>
      </div>
    </Dialog>
  );
}

function Question() {
  const router = useRouter();
  console.log("THE PATHNAME", router.pathname);
  const [question, setQuestions] = useState();
  const [answer, setAnswer] = useState();
  let [isOpen, setIsOpen] = useState(false);
  //process.env.PRODUCTION is undefined
  console.log("THE TOGGLER FOR MODAL", isOpen);
  useEffect(async () => {
    if (router.asPath !== router.route) {
      const { id } = router.query;

      console.log("ROUTER QUERY", router.query);
      console.log("ID IS", id);

      const url = `${process.env.PRODUCTION}/api/question/${id}`;
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
