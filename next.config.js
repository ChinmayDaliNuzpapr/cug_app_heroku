module.exports = {
  env: {
    url:
      "mongodb+srv://bhupesh:bhupesh@cluster0.axtn8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    secretKey: "mysecretkey",
    email: "testmail67590@gmail.com",
    password: "/mK&F,Z2xG",

    DEVELOPMENT: "http://localhost:3000",
    //success messages
    PRODUCTION: "https://cug-app.herokuapp.com/",
    EMAIL_CONFIRMATION: " We have sent you email confirmation to you.",
    LOGGED_IN_SUCCESSFULLY: "Welcome back to  our platform",
    QUESTION_ADDED: "Your question has been added successfuly",
    ANSWER_DELETED: "Your answer has been deleted",
    FIRST_TIME_LOGGEDIN:
      "Welcome to our platform , you have been assigned this ID ",

    //all errors will be put here

    INVALID_EMAIL_ERROR: "Please enter a valid email.",
    INVALID_ACTIVATION_LINK: "Please use a valid activation link",
    TOKEN_NOT_FOUND: "No authorization header (token) present",
    OWNERSHIP_NOT_FOUND:
      "You can't perform any operation in this document as you don't own it",
    PROVIDE_COMPLETE_DETAILS:
      "Please provide all details to complete the operation",
    INVALID_URL: "The URL provided is invalid",
    UNAUTHORIZED_ACCESS: "You don't have access to view it 😥",
    UNSUPPORTED_METHOD:
      "Please use a valid HTTP method as designed in server side",
  },
};
