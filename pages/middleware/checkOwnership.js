const checkOwnership = (author, req) => {
	//obj is the object to be deleted
	if (author == req.user.alphaNumericId) return true;
	else return false;
};

export default checkOwnership;
