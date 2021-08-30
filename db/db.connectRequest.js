const { DataTypes } = require('sequelize');
const sequelize = require('./db.connection');
const Users = require('./db.users');


const Connect = sequelize.define('connect', {
	id_user: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	id_friend: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	aproved: {
		type: DataTypes.STRING,
		allowNull: false
	},
}, {
	timestamps: true
});

module.exports = Connect;
