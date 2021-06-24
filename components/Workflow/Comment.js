import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../Button/Button";
import { convertingDateValue } from "../../components/Workflow/Question";
const Reply = ({ reply }) => {
  const [like, setLike] = useState(reply.article.like);

  const Like = async () => {
    const token = localStorage.getItem("jwt_token");
    const data = { articleID: reply.article._id };

    const response = await axios.post(
      `${process.env.DEVELOPMENT}/api/reply/like`,
      data,
      {
        headers: {
          Authorization: token && `Bearer ${token}`,
        },
      }
    );
    const res = response.data;
    setLike(res.likes);
  };

  return (
    <div className="mb-2 p-3 rounded-md border-2 w-[80%]">
      <div className="montserrat-12">{reply.article.content}</div>
      <div className="flex justify-between montserrat-10 ">
        <div className="grid grid-cols-3 gap-6">
          <div className="montserrat-10 ">{`Posted by : ${reply.article.author}`}</div>

          <div className="flex justify-start">
            <div className="w-[20px] h-[20px]">
              {/* like button */}
              <svg
                onClick={Like}
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
            <div className="margin_auto">{like && <div>{like}</div>}</div>
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
          <div>21211111112</div>
        </div>
      </div>
    </div>
  );
};

const Comment = ({ answer }) => {
  //for submitting form
  const [replyTogger, setReplyToggler] = useState(false);

  const [reply, setReply] = useState("");

  const [allReplyToggler, setallReplyToggler] = useState(false);

  const [replies, setReplies] = useState([]);

  const [like, setLike] = useState(answer.article.like);

  const Like = async () => {
    const token = localStorage.getItem("jwt_token");
    const data = { articleID: answer.article._id };

    const response = await axios.post(
      `${process.env.DEVELOPMENT}/api/answer/like`,
      data,
      {
        headers: {
          Authorization: token && `Bearer ${token}`,
        },
      }
    );
    const res = response.data;
    setLike(res.likes);
  };

  const addReply = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("jwt_token");

    const data = {
      answerID: answer._id,
      article: {
        content: reply,
        author: localStorage.getItem("alphaNumericId"), //enter the author name here
      },
    };

    const response = await axios.post(
      `${process.env.DEVELOPMENT}/api/reply/post`,
      data,
      {
        headers: {
          Authorization: token && `Bearer ${token}`,
        },
      }
    );

    const res = response.data;

    console.log(res);

    if (res) {
      setReply("");
      setReplies([...replies, res.newReply]);
    }
  };

  const showAllReply = async (e) => {
    setallReplyToggler(!allReplyToggler);

    const token = localStorage.getItem("jwt_token");

    const data = {
      answerID: answer._id,
    };

    const response = await axios.post(
      `${process.env.DEVELOPMENT}/api/reply/all`,
      data,
      {
        headers: {
          Authorization: token && `Bearer ${token}`,
        },
      }
    );

    const res = response.data;

    setReplies(res.reply);
  };

  const EnableReplyToggler = (e) => {
    setReplyToggler(!replyTogger);
  };

  return (
    <div>
      <div className="my-4 p-3 rounded-md border-2 w-100">
        <p className="montserrat-12 mb-8">{answer.article.content}</p>

        <div className="mb-4 flex justify-between montserrat-10 ">
          <div className="grid grid-cols-4 gap-6">
            <div className="montserrat-10 ">{`Posted by : ${answer.article.author}`}</div>
            <div>
              <div className="w-[20px] h-[20px]">
                <svg
                  // add reply toggler
                  onClick={(e) => EnableReplyToggler(e)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
            </div>
            <div className="w-[20px] h-[20px]">
              {/* replies toggler */}
              <svg
                onClick={(e) => showAllReply(e)}
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="flex justify-start">
              <div className="w-[20px] h-[20px]">
                <svg
                  onClick={Like}
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
              <div className="margin_auto">{like && <div>{like}</div>}</div>
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
            <div>{answer.article.createdAt}</div>
          </div>
        </div>

        {replyTogger && (
          <div>
            <form onSubmit={(e) => addReply(e)}>
              <div className="montserrat-10">
                {`Reply to ${answer.article.author}`}{" "}
              </div>
              <div className="flex justify-center flex-wrap ">
                <textarea
                  className="border-2 border-black flex-grow"
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                />
                <div className="my-auto">
                  <Button content="Submit" />
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
      <div className="">
        {allReplyToggler &&
          replies &&
          replies.map((item, index) => (
            <div className="flex justify-end">
              <Reply key={index} reply={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comment;
