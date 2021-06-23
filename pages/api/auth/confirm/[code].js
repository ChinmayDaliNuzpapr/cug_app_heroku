import jwt from 'jsonwebtoken';
import userModel from '../../../../models/user';
import validationModel from '../../../../models/validationCode';
import groupModel from '../../../../models/group';
import questionModel from '../../../../models/question';
import categoryModel from '../../../../models/category';
import DBConnect from '../../../middleware/DBConnect';
import randomstring from 'randomstring';

const generateToken = (user) => {
	return jwt.sign(
		{
			_id: user._id,
			Group_name: user.Group_name,
			alphaNumericId: user.alphaNumericId,
		},
		process.env.secretKey
		//expiry of jwt token
		//{ expiresIn: '6h' }
	);
};

/*const getCategoryAndQuestions = async (groupID) => {
	const defaultCategory = '60c1d3759e4b0d08706a9a3d'; //ID of default category "category 1"
	const categories = await categoryModel.find({});
	const questions = await questionModel.find({
		$and: [{ category: defaultCategory }, { group: groupID }],
	});

	return { categories, questions };
};*/

const confirmation = async (req, res) => {
	try {
		const { code } = req.query;

		const validationCode = await validationModel.findOne({
			$and: [{ code: code }, { active: true }],
		});

		if (!validationCode) throw process.env.INVALID_ACTIVATION_LINK;

		let token, user, current_group;

		//CREATING THE GROUP

		const GroupAlreadyExist = await groupModel.findOne({
			Group_name: validationCode.Group_name,
		});

		current_group = GroupAlreadyExist;

		if (!GroupAlreadyExist) {
			const new_group = new groupModel({
				Group_name: validationCode.Group_name,
			});

			await new_group.save();

			current_group = new_group;
		}

		const UserAlreadyRegistered = await userModel.findOne({
			email: validationCode.email,
		});

		if (UserAlreadyRegistered) {
			user = {
				_id: UserAlreadyRegistered._id,
				Group_name: UserAlreadyRegistered.Group_name,
				alphaNumericId: UserAlreadyRegistered.alphaNumericId,
			};

			token = generateToken(user);
			console.log('NOT FIRST TIME', token);

			//making validation code inactive
			validationCode.active = false;
			validationCode.save();

			return res.send({
				token,
				message: process.env.LOGGED_IN_SUCCESSFULLY,
				alphaNumericId: UserAlreadyRegistered.alphaNumericId,
			});
		} else {
			const id = randomstring.generate({
				length: 12,
				charset: 'alphanumeric',
			});

			//register the user
			user = new userModel({
				Group_name: validationCode.Group_name,
				alphaNumericId: id,
			});

			await user.save();
			token = generateToken(user);
			console.log('FIRST TIME', token);

			//saving email after generating the token
			user.email = validationCode.email;
			await user.save();

			//making validation code inactive
			validationCode.active = false;
			validationCode.save();

			return res.send({
				token,
				message: process.env.FIRST_TIME_LOGGEDIN,
				alphaNumericId: id,
			});
		}
	} catch (err) {
		console.log(err);
		res.redirect('/404', { error: err });
	}
};

export default DBConnect(confirmation);
