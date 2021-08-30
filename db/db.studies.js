const { DataTypes } = require('sequelize');
const sequelize = require('./db.connection');


const Studies = sequelize.define('studies', {
	id_user: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	degree: {
		type: DataTypes.STRING(50),
		allowNull: false
	},
	school: {
		type: DataTypes.STRING(50),
		allowNull: false
	},
	country: {
		type: DataTypes.STRING(50),
		allowNull: false
	},
}, {
	timestamps: true
});


module.exports = Studies;
