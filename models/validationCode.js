import mongoose, { Mongoose } from 'mongoose';
const ModelName = 'validationModel';

const validationSchema = new mongoose.Schema({
	email: { type: String },
	Group_name: { type: String },
	code: {
		type: String,
	},
	createdAt: { type: Date, default: Date.now },
	active: {
		type: Boolean,
		default: true,
	},
});

export default mongoose.models[ModelName] ||
	mongoose.model(ModelName, validationSchema, 'validation');
