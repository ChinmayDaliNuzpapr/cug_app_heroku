import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../components/Layout";
import axios from "axios";
const AuthConfirmComponent = ({ token_val, user_id }) => {
  return (
    <div className="flex flex-row h-screen">
      {/* The left side image */}
      <div className="w-1/5">
        <div className="flex flex-col">
          <img
            className="h-screen image_full_screen"
            src="/sidebar_image.jpeg"
          />
        </div>
      </div>
      <div className="flex-grow">
        <div className="grid grid-col-1 content-evenly gap-4">
          {console.log("THE TOKEN ----> ", token_val)}
          <span className="text-2xl">You have been authenticated</span>
          <span className="">Your user id: {user_id}</span>
          {/* <span className="">Your token id: {token_val}</span> */}
        </div>
      </div>
    </div>
  );
};
const TokenComponent = (props) => {
  // const [token, setToken] = useState(null);
  const { authenticated, setAuthenticated } = useContext(UserContext);
  const { query } = useRouter();
  const router = useRouter();
  let intialCodeVal = null;
  console.log("THE PROPS👉👉👉👉", props);
  console.log("THE QUERY🎇🎇🎇🎇🎇", query);
  if (query.token) {
    intialCodeVal = query.token;
    localStorage.setItem("token", query.token);
    // setAuthenticated(query.token);
  }
  useEffect(() => {
    console.log("THE USE EFFECT RAN");
    if (localStorage.getItem("token")) {
      // Now lets fetch token
      axios
        .get(`${process.env.PRODUCTION}/api/auth/confirm/${query.token}`)
        .then((res) => {
          console.log("THE RESPONSE👉👉👉👉👉👉👉👉👉👉", res);
          localStorage.setItem("jwt_token", res.data.token);
          localStorage.setItem("alphaNumericId", res.data.alphaNumericId);
          setAuthenticated(res.data);
          return router.push(`${process.env.PRODUCTION}/questions`);
        })
        .catch((err) => console.log("SOMETHING WENT WRONG", err));
    }
  }, [intialCodeVal]);
  console.log("THE VALUE OF authenticated", authenticated);
  return (
    <div>
      {authenticated && <AuthConfirmComponent token_val={{ authenticated }} />}
    </div>
  );
};

export default TokenComponent;
