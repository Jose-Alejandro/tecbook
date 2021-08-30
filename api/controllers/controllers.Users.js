const modelsUsers = require('../model/models.users');
const jwt = require('jsonwebtoken');

module.exports.registerUser = async (newUser) => {
	try {
		const ok = await modelsUsers.RegisterUser(newUser);
		if (ok) {
			return true;
		}
		throw new Error('An internal error has ocurred, try later');
	} catch (error) {
		throw error;
	}
};


module.exports.registerAdminUser = async (newUser) => {
	try {
		const ok = await modelsUsers.RegisterAdminUser(newUser);
		if (ok) {
			return true;
		}
		throw new Error('An internal error has ocurred, try later');
	} catch (error) {
		throw error;
	}
};

module.exports.validateUser = async (usr) => {
	try {
		const ok = await modelsUsers.UserExists(usr);
		return ok;
	} catch (error) {
		throw error;
	}
};


module.exports.generateUserToken = async (user) => {
	let d = {
		id: user.id,
		names: user.names,
		email: user.email,
		role: user.role
	};
	const token = jwt.sign(
		{
			data: d
		},
		process.env.SECRET_KEY
	);
	return token;
};

module.exports.verifyUserToken = async (token) => {
	try {
		const decodedUser = jwt.verify(token, process.env.SECRET_KEY);
		if (decodedUser) {
			return decodedUser;
		}
	} catch (error) {
		throw error;
	}
};

module.exports.retrieveUser = async (user) => {
	try {
		const result = await modelsUsers.retrieveUser(user);
		return result;
	} catch (error) {
		throw error;
	}
};

module.exports.retrieveTeclers = async () => {
	try {
		const result = await modelsUsers.retrieveTeclers();
		return result;
	} catch (error) {
		throw error;
	}
};


module.exports.modifyUser = async (newUser, old) => {
	try {
		const ok = await modelsUsers.modifyUser(newUser, old);
		if (ok) {
			return newUser;
		}
		throw new Error('An internal error has ocurred, try later');
	} catch (error) {
		throw error;
	}
};
