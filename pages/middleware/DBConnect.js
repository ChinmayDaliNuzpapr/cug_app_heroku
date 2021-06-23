import mongoose from 'mongoose';

const connectDB = (handler) => async (req, res) => {
	if (mongoose.connections[0].readyState) {
		// Use current db connection
		return handler(req, res);
	}
	// Use new db connection
	await mongoose.connect(process.env.url, {
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
		useNewUrlParser: true,
	});

	console.log('Connection to database established');
	return handler(req, res);
};

export default connectDB;
