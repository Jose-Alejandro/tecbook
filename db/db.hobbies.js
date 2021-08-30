const { DataTypes } = require('sequelize');
const sequelize = require('./db.connection');

const Hobbies = sequelize.define(
	'hobbies',
	{
		id_user: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		hobbie: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		timestamps: true
	}
);

module.exports = Hobbies;
