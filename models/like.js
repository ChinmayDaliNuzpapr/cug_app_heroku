import mongoose from 'mongoose';
import { bool } from 'yup';
const ModelName = 'likeModel';

const likeSchema = new mongoose.Schema({
	article: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'article',
	},
	alphaNumericId: { type: String },
	active: { type: Boolean, default: true },
});

export default mongoose.models[ModelName] ||
	mongoose.model(ModelName, likeSchema, 'like');
