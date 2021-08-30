const { DataTypes } = require('sequelize');
const sequelize = require('./db.connection');

const Feedback = sequelize.define(
	'feedback',
	{
		id_user: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		comment: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		timestamps: true
	}
);

module.exports = Feedback;
