import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	author: {
		type: String,
	},
	like: {
		type: Number,
		default: 0,
	},
	content: {
		type: String,
	},
	scope: {
		type: String, //scope can be either company and global
	},
	active: {
		type: Boolean,
		default: true,
	},
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

export default articleSchema;
