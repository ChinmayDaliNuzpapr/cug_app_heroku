import mongoose from 'mongoose';
const ModelName = 'replyModel';
import articleSchema from './article';

const replySchema = new mongoose.Schema({
	answer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'answer', //name of the collection
	},
	article: articleSchema,
});

export default mongoose.models[ModelName] ||
	mongoose.model(ModelName, replySchema, 'reply');
