import cron from 'node-cron';
import mongoose from 'mongoose';
import validationModel from '../../models/validationCode';

cron.schedule('0 */2 * * *', async () => {
	//running the task after every 2 hr
	await mongoose.connect(process.env.url, {
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
		useNewUrlParser: true,
	});

	console.log('Connection to database established');

	//deleteing all validattion link which are inactive
	await validationModel.deleteMany({ active: false });

	console.log('Deleted all links which are inactive');
});
