//MIDDLEWARE TO CHECK WHETHER USER HAS LIKED A POST OR NOT
//IT RETURNS INCREMENT(1 OR -1) , WHEN USER HASN'T LIKED IT RETURN  AND WHEN USET HAS LIKED ALREADY RETURN -1

import likeModel from '../../models/like';

const checkLike = async (articleID, alphaNumericId) => {
	//we will decrement like if user has already liked
	let increment = 1;

	const dataToBeSearched = {
		alphaNumericId,
		article: articleID,
	};

	//check if like is present or not

	const like = await likeModel.findOne(dataToBeSearched);

	if (!like) await likeModel.create(dataToBeSearched);
	else if (like.active) {
		like.active = false; //disabling the like
		await like.save();
		increment = -1;
	} else {
		like.active = true;
		await like.save();
	}

	return increment;
};

export default checkLike;
