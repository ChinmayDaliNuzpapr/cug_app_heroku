import DBConnect from '../../middleware/DBConnect';
import questionModel from '../../../models/question';
import isUserLoggedIn from '../../middleware/isUserLoggedIn';

const Search = async (req, res) => {
	try {
		req = await isUserLoggedIn(req, res);

		const { search, searchBy, scope } = req.body;

		let searchingExpression;

		switch (searchBy) {
			case 'tag':
				searchingExpression = {
					tags: { $elemMatch: { $eq: search } },
				};
				break;

			case 'title':
				searchingExpression = {
					'article.title': { $eq: search },
				};
				break;
		}

		const question = await questionModel.find({
			$and: [searchingExpression, { 'article.scope': scope }],
		});

		//FOR MULTIPLE TAGS
		/*const question = questionModel.find({
            tags: {
                $in : tags_list
            }
        });*/

		return res.status(200).send({ question });
	} catch (err) {
		console.log(err);
		res.status(500).send({ error: err });
	}
};

export default DBConnect(Search);
