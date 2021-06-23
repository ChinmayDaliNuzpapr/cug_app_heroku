//POST REQUEST TO LIKE A QUESTION
//DATA FORAMT TO COME FROM FRONT END - { articleID }

import DBConnect from '../../middleware/DBConnect';
import questionModel from '../../../models/question';
import isUserLoggedIn from '../../middleware/isUserLoggedIn';
import checkLike from '../../middleware/checkLike';

const likeQuestion = async (req, res) => {
	if (req.method == 'POST') {
		try {
			req = await isUserLoggedIn(req, res);

			const { articleID } = req.body;

			//MIDDLEWARE TO CHECK WHETHER USER HAS LIKED A POST OR NOT
			const increment = await checkLike(articleID, req.user.alphaNumericId);

			const question = await questionModel.findOneAndUpdate(
				{
					'article._id': articleID,
				},
				{
					$inc: { 'article.like': increment },
				},
				{ new: true }
			);
			return res.status(200).send({ likes: question.article.like });
		} catch (err) {
			console.log(err);

			return res.status(500).send({ error: err });
		}
	} else {
		return res.status(500).send(process.env.UNSUPPORTED_METHOD);
	}
};

export default DBConnect(likeQuestion);
