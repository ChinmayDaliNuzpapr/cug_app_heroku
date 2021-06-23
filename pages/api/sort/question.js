import DBConnect from '../../middleware/DBConnect';
import questionModel from '../../../models/question';
import isUserLoggedIn from '../../middleware/isUserLoggedIn';
import mongoose from 'mongoose';

const Sort = async (req, res) => {
	try {
		req = await isUserLoggedIn(req, res);

		const { categoryID, criteria, scope } = req.body;

		let SortingExpression;

		switch (criteria) {
			case 'view':
				SortingExpression = {
					$sort: { 'view.count': -1 },
				};
				break;

			case 'like':
				SortingExpression = {
					$sort: { 'article.like': -1 },
				};
				break;

			case 'date':
				SortingExpression = {
					$sort: { 'article.createdAt': -1 },
				};
		}

		const ObjectId = mongoose.Types.ObjectId;

		const sortedQuestions = await questionModel.aggregate([
			{
				$match: {
					$and: [
						{ category: new ObjectId(categoryID) },
						{ 'article.scope': scope },
					],
				},
			},
			SortingExpression,
		]);

		res.send(sortedQuestions);
	} catch (err) {
		console.log(err);
		res.status(500).send({ error: err });
	}
};

export default DBConnect(Sort);
