//get all replies

import DBConnect from '../../middleware/DBConnect';
import replyModel from '../../../models/reply';
import answerModel from '../../../models/answer';
import isUserLoggedIn from '../../middleware/isUserLoggedIn';

const viewAnswer = async (req, res) => {
	try {
		req = await isUserLoggedIn(req, res);

		const { answerID } = req.body;

		const reply = await replyModel.find({ answer: answerID });

		return res.status(200).send({ reply });
	} catch (err) {
		console.log(err);
		return res.status(500).send({ error: err });
	}
};

export default DBConnect(viewAnswer);
