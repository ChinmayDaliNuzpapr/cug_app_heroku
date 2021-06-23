import jwt from 'jsonwebtoken';

const isUserLoggedIn = (req, res) => {
	return new Promise((resolve, reject) => {
		let token;
		if (req.headers.authorization)
			token = req.headers.authorization.split('Bearer ')[1];

		if (token) {
			const user = jwt.verify(token, process.env.secretKey);
			req.user = user;
			resolve(req);
		} else reject(process.env.TOKEN_NOT_FOUND);
	});
};

export default isUserLoggedIn;
