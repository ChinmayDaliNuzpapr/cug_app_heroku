import mongoose, { Mongoose } from 'mongoose';
const ModelName = 'userModel';

const userSchema = new mongoose.Schema({
	Group_name: {
		type: String,
	},
	email: {
		type: String,
		unique: true,
		trim: true,
		lowercase: true,
	},
	alphaNumericId: {
		type: String,
		default: '',
	},
	status: {
		type: Boolean,
		default: false,
	},
});

export default mongoose.models[ModelName] ||
	mongoose.model(ModelName, userSchema, 'users');
