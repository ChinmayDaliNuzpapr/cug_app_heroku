import mongoose from 'mongoose';
const ModelName = 'answerModel';
import articleSchema from './article';

const answerSchema = new mongoose.Schema({
	question: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'question', //name of the collection
	},
	article: articleSchema,
});

export default mongoose.models[ModelName] ||
	mongoose.model(ModelName, answerSchema, 'answer');
