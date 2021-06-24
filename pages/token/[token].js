import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { AuthConfirmComponent } from "../../components/Home/AuthComponent";

const TokenComponent = (props) => {
  // const [token, setToken] = useState(null);
  const [authenticated, setAuthenticated] = useState(null);
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
          // localStorage.setItem("alphaNumericId", res.data.alphaNumericId);
          setAuthenticated(res.data);
          return router.push(`${process.env.PRODUCTION}/questions`);
        })
        .catch((err) => console.log("SOMETHING WENT WRONG", err));
    }
  }, [intialCodeVal]);
  console.log("THE VALUE OF authenticated", authenticated);
  return (
    <div>
      {console.log("THE BUILD PROCESS")}
      {authenticated && <AuthConfirmComponent token_val={{ authenticated }} />}
    </div>
  );
};

export default TokenComponent;
