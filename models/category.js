import mongoose from 'mongoose';
const ModelName = 'categoryModel';

const categorySchema = new mongoose.Schema({
	categoryName: {
		type: String,
	},
	/*group: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'group', //name of the collection
	},*/
});

export default mongoose.models[ModelName] ||
	mongoose.model(ModelName, categorySchema, 'category');
