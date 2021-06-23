import DBConnect from '../../middleware/DBConnect';
import questionModel from '../../../models/question';
import isUserLoggedIn from '../../middleware/isUserLoggedIn';

const PostQuestion = async (req, res) => {
	if (req.method == 'POST') {
		try {
			//creating dummy froup "gmail" & dummy category "category 1"

			/*const d = new groupModel({
				groupName: 'gmail',
			});
			d.save();
			const c = new categoryModel({
				group: d._id,
				categoryName: 'Catgory 1',
			});
			c.save();*/

			//checking whether user is logged in or not
			req = await isUserLoggedIn(req, res);

			//console.log(req);
			const { categoryID, groupID, article, tags } = req.body;

			if (categoryID && groupID && article && tags) {
				const newQuestion = new questionModel({
					category: categoryID,
					group: groupID,
					article,
					tags,
				});

				await newQuestion.save();

				return res
					.status(200)
					.send({ newQuestion, message: process.env.QUESTION_ADDED });
			} else throw process.env.PROVIDE_COMPLETE_DETAILS;
		} catch (err) {
			console.log(err);
			return res.status(500).send({ error: err });
		}
	}
};

export default DBConnect(PostQuestion);
