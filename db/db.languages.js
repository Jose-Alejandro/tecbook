
const { DataTypes } = require('sequelize');
const sequelize = require('./db.connection');

const Languages = sequelize.define(
	'languages',
	{
		id_user: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		language_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		level: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},
	{
		timestamps: true
	}
);

module.exports = Languages;
