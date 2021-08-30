const { DataTypes } = require('sequelize');
const sequelize = require('./db.connection');
const Studies = require('./db.studies');
const Technologies = require('./db.technologies');
const SoftSkills = require('./db.softskills');
const ProfEnvironments = require('./db.professionalEnvironments');
const Performance = require('./db.performance');
const OtherKnowledges = require('./db.otherKnowledge');
const Languages = require('./db.languages');
const Knowledges = require('./db.knowledges');
const Hobbies = require('./db.hobbies');
const Feedback = require('./db.feedback');
const Connect = require('./db.connectRequest');


const Users = sequelize.define(
	'users',
	{
		names: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		last_names: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(),
			allowNull: false
		},
		edad: {
			type: DataTypes.INTEGER(),
			allowNull: true
		},
		photo_profile_url: {
			type: DataTypes.STRING(),
			allowNull: true
		},
		linkedin_url: {
			type: DataTypes.STRING(),
			allowNull: true
		},
		role: {
			type: DataTypes.STRING,
			allowNull: false
		},
		active: {
			type: DataTypes.STRING(15),
			allowNull: false
		},
	},
	{
		timestamps: true
	}
);

Users.hasMany(Studies, { foreignKey: 'id_user' });
Users.hasMany(Technologies, { foreignKey: 'id_user' });
Users.hasMany(SoftSkills, { foreignKey: 'id_user' });
Users.hasMany(ProfEnvironments, { foreignKey: 'id_user' });
Users.hasMany(Performance, { foreignKey: 'id_user' });
Users.hasMany(OtherKnowledges, { foreignKey: 'id_user' });
Users.hasMany(Languages, { foreignKey: 'id_user' });
Users.hasMany(Knowledges, { foreignKey: 'id_user' });
Users.hasMany(Hobbies, { foreignKey: 'id_user' });
Users.hasMany(Feedback, { foreignKey: 'id_user' });
Users.hasMany(Connect, { foreignKey: 'id_user' });

module.exports = Users;
