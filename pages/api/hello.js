// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';
import userModel from '../../models/user';
import DBConnect from '../middleware/DBConnect';
import randomstring from 'randomstring';
import Email from 'email-templates';

const Hello = async (req, res) => {
	try {
		console.log(process.env.error);
		/*const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.email,
				pass: process.env.password,
			},
		});

		const email = new Email({
			transport: transporter,
			send: true,
			preview: false,
		});

		email
			.send({
				template: 'hello',
				message: {
					from: process.env.email,
					to: 'bhupeshbhatt8222@gmail.com',
				},
				subject: 'Confirm your email address to start communicating',
				locals: {
					fname: 'John',
					lname: 'Snow',
				},
			})
			.then(() => console.log('email has been send!'));*/
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};

export default DBConnect(Hello);
