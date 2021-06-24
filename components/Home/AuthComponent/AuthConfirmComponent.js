export const AuthConfirmComponent = ({ token_val, user_id }) => {
  console.log("THE AUTH CONFIRM COMPONENT 🌟🌟🌟🌟🌟🌟");
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
