
const { DataTypes } = require('sequelize');
const sequelize = require('./db.connection');

const Knowledges = sequelize.define(
	'knowledges',
	{
		id_user: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		rating: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	},
	{
		timestamps: true
	}
);

module.exports = Knowledges;
