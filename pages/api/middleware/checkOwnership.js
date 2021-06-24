const checkOwnership = (author, req) => {
  console.log("THE OWNERSHIP IN PAGE MIDDLEWARE");
  //obj is the object to be deleted
  if (author == req.user.alphaNumericId) return true;
  else return false;
};

export default checkOwnership;
