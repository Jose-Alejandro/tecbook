const knowledges = require('../../db/db.knowledges');
const technology = require('../../db/db.technologies');
const performance = require('../../db/db.performance');
const softSkills = require('../../db/db.softskills');
const professionalEnvironments = require('../../db/db.professionalEnvironments');
const feedback = require('../../db/db.feedback');
const extraN = require('../../db/db.otherKnowledge');
const hobbies = require('../../db/db.hobbies');
const languages = require('../../db/db.languages');
const studies = require('../../db/db.studies');
const connectRequest = require('../../db/db.connectRequest');
const users = require('../../db/db.users');

module.exports.retrieveTecler = async (id) => {
	try {
		let User = await users.findOne({
			where: {
				id: id,
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


module.exports.AddKnowledge = async (knowledge) => {
	try {
		await knowledges.create(knowledge);
		return true;
	} catch (error) {
		throw error;
	}
};

module.exports.retrieveKnowledges = async (id) => {
	try {
		let res = await knowledges.findAll({
			where: {
				id_user: id,
			}
		});
		if (res) {
			return res;
		}
		throw new Error('This user has no rated knowledges...');
	} catch (error) {
		throw error;
	}
};


module.exports.AddTechnology = async (t) => {
	try {
		await technology.create(t);
		return true;
	} catch (error) {
		throw error;
	}
};

module.exports.retrieveTechnology = async (id) => {
	try {
		let res = await technology.findAll({
			where: {
				id_user: id,
			}
		});
		if (res) {
			return res;
		}
		throw new Error('This user has no rated technology...');
	} catch (error) {
		throw error;
	}
};

module.exports.AddPerformance = async (perform) => {
	try {
		await performance.create(perform);
		return true;
	} catch (error) {
		throw error;
	}
};

module.exports.retrievePerformance = async (id) => {
	try {
		let res = await performance.findAll({
			where: {
				id_user: id,
			}
		});
		if (res) {
			return res;
		}
		throw new Error('This user has no rated performance...');
	} catch (error) {
		throw error;
	}
};

module.exports.AddSoftSkills = async (perform) => {
	try {
		await softSkills.create(perform);
		return true;
	} catch (error) {
		throw error;
	}
};

module.exports.retrieveSoftSkills = async (id) => {
	try {
		let res = await softSkills.findAll({
			where: {
				id_user: id,
			}
		});
		if (res) {
			return res;
		}
		throw new Error('This user has no rated soft skills...');
	} catch (error) {
		throw error;
	}
};

module.exports.AddProfEnv = async (profEnv) => {
	try {
		await professionalEnvironments.create(profEnv);
		return true;
	} catch (error) {
		throw error;
	}
};

module.exports.retrieveProfEnv = async (id) => {
	try {
		let res = await professionalEnvironments.findAll({
			where: {
				id_user: id,
			}
		});
		if (res) {
			return res;
		}
		throw new Error('This user has no rated professional environments...');
	} catch (error) {
		throw error;
	}
};

module.exports.Addfeedback = async (profEnv) => {
	try {
		await feedback.create(profEnv);
		return true;
	} catch (error) {
		throw error;
	}
};

module.exports.retrievefeedback = async (id) => {
	try {
		let res = await feedback.findAll({
			where: {
				id_user: id,
			}
		});
		if (res) {
			return res;
		}
		throw new Error('This user has no feedback comments yet...');
	} catch (error) {
		throw error;
	}
};


module.exports.AddExtraKnow = async (profEnv) => {
	try {
		await extraN.create(profEnv);
		return true;
	} catch (error) {
		throw error;
	}
};

module.exports.retrieveExtraKnow = async (id) => {
	try {
		let res = await extraN.findAll({
			where: {
				id_user: id,
			}
		});
		if (res) {
			return res;
		}
		throw new Error('This user has no rated extra knowledges...');
	} catch (error) {
		throw error;
	}
};

module.exports.AddHobby = async (hobby) => {
	try {
		await hobbies.create(hobby);
		return true;
	} catch (error) {
		throw error;
	}
};

module.exports.retrieveHobby = async (id) => {
	try {
		let res = await hobbies.findAll({
			where: {
				id_user: id,
			}
		});
		if (res) {
			return res;
		}
		throw new Error('This user has no registered hobbies...');
	} catch (error) {
		throw error;
	}
};

module.exports.AddLanguage = async (language) => {
	try {
		await languages.create(language);
		return true;
	} catch (error) {
		throw error;
	}
};

module.exports.retrieveLanguage = async (id) => {
	try {
		let res = await languages.findAll({
			where: {
				id_user: id,
			}
		});
		if (res) {
			return res;
		}
		throw new Error('This user has no registered languages...');
	} catch (error) {
		throw error;
	}
};

module.exports.AddStudy = async (study) => {
	try {
		await studies.create(study);
		return true;
	} catch (error) {
		throw error;
	}
};

module.exports.retrieveStudy = async (id) => {
	try {
		let res = await studies.findAll({
			where: {
				id_user: id,
			}
		});
		if (res) {
			return res;
		}
		throw new Error('This user has no registered studies...');
	} catch (error) {
		throw error;
	}
};

module.exports.SendConnectRequest = async (study) => {
	try {
		await connectRequest.create(study);
		return true;
	} catch (error) {
		throw error;
	}
};

module.exports.retrieveConnectionRequests = async (id) => {
	try {
		let res = await connectRequest.findAll({
			where: {
				id_user: id,
			}
		});
		if (res) {
			return res;
		}
		throw new Error('This user has no registered studies...');
	} catch (error) {
		throw error;
	}
};

module.exports.retrieveConnectionRecivedRequests = async (id) => {
	try {
		let res = await connectRequest.findAll({
			where: {
				id_friend: id,
			}
		});
		if (res) {
			return res;
		}
		throw new Error('This user has no registered studies...');
	} catch (error) {
		throw error;
	}
};


module.exports.SendAproveRequest = async (study) => {
	try {
		study.aproved = 'true';
		await connectRequest.update(study, {
			where: {
				id: study.id,
			}
		});
		return true;
	} catch (error) {
		throw error;
	}
};
