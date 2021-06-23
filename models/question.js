import mongoose from 'mongoose';
const ModelName = 'questionModel';
import articleSchema from './article';

const questionSchema = new mongoose.Schema({
	//group field will be null in case of question in global view
	group: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'group',
	},

	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'category',
	},

	article: articleSchema,

	view: {
		count: { type: Number, default: 0 },
		//viewedOn: { type: Date, default: Date.now },
	},
	tags: [String],
});

export default mongoose.models[ModelName] ||
	mongoose.model(ModelName, questionSchema, 'question');
