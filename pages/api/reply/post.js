import DBConnect from '../../middleware/DBConnect';
import isUserLoggedIn from '../../middleware/isUserLoggedIn';
import replyModel from '../../../models/reply';

const postReply = async (req, res) => {
	try {
		req = await isUserLoggedIn(req, res);

		const { answerID, article } = req.body;

		const newReply = new replyModel({
			answer: answerID,
			article: article,
		});

		await newReply.save();

		res.status(200).send({ newReply });
	} catch (err) {
		console.log(err);
		return res.status(500).send({ error: err });
	}
};

export default DBConnect(postReply);
