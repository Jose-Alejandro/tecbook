const users = require('../../db/db.users');
const bcrypt = require('bcrypt');

module.exports.RegisterUser = async (user) => {
	try {
		const hash = bcrypt.hashSync(user.password, 10);
		let exists = await users.findOne({ where: { email: user.email } });
		if (exists) {
			throw new Error('Email already registered or inactive user');
		} else {
			user.active = 'true';
			user.role = 'user';
			user.password = hash;
			await users.create(user);
			return true;
		}
	} catch (error) {
		throw error;
	}
};

module.exports.RegisterAdminUser = async (user) => {
	try {
		const hash = bcrypt.hashSync(user.password, 10);
		let exists = await users.findOne({ where: { email: user.email } });
		if (exists) {
			throw new Error('Email already registered or inactive user');
		} else {
			user.active = 'true';
			user.role = 'admin';
			user.password = hash;
			await users.create(user);
			return true;
		}
	} catch (error) {
		throw error;
	}
};

module.exports.UserExists = async (user) => {
	try {
		let exists = await users.findOne({
			where: {
				email: user.email,
				active: 'true',
			}
		});
		if (exists && bcrypt.compareSync(user.password, exists.password)) {
			return exists;
		}
		throw new Error('No user with these credentials, verify they are correct');
	} catch (error) {
		throw error;
	}
};


module.exports.retrieveUser = async (user) => {
	try {
		let User = await users.findOne({
			where: {
				email: user.email,
				active: 'true',
			}
		});
		if (User) {
			return User.dataValues;
		}
		throw new Error('User no longer exists or is inactive');
	} catch (error) {
		throw error;
	}
};


module.exports.retrieveTeclers = async () => {
	try {
		let Users = await users.findAll({
			where: {
				role: 'user',
				active: 'true',
			}
		});
		if (Users) {
			return Users;
		}
		throw new Error('User no longer exists or is inactive');
	} catch (error) {
		throw error;
	}
};


module.exports.modifyUser = async (user, old) => {
	try {
		const hash = bcrypt.hashSync(user.password, 10);
		user.password = hash;
		let result = await users.update(user, {
			where: {
				email: old.email,
				active: 'true',
			}
		});
		if (result[0]) {
			return true;
		}
		throw new Error('User not active in database, check user data');
	} catch (error) {
		throw error;
	}
};
