
const { DataTypes } = require('sequelize');
const sequelize = require('./db.connection');

const OtherKnowledges = sequelize.define(
	'otherknowledges',
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
			allowNull: true
		}
	},
	{
		timestamps: true
	}
);

module.exports = OtherKnowledges;
