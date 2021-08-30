const modelsTeclers = require('../model/models.teclers');

module.exports.retrieveTecler = async (id) => {
	try {
		const ok = await modelsTeclers.retrieveTecler(id);
		return ok;
	} catch (error) {
		throw error;
	}
};

module.exports.AddKnowledge = async (knowledge) => {
	try {
		const ok = await modelsTeclers.AddKnowledge(knowledge);
		if (ok) {
			return true;
		}
		throw new Error('An internal error has ocurred, try later');
	} catch (error) {
		throw error;
	}
};


module.exports.retrieveKnowledges = async (id) => {
	try {
		const ok = await modelsTeclers.retrieveKnowledges(id);
		return ok;
	} catch (error) {
		throw error;
	}
};

module.exports.AddTechnology = async (technology) => {
	try {
		const ok = await modelsTeclers.AddTechnology(technology);
		if (ok) {
			return true;
		}
		throw new Error('An internal error has ocurred, try later');
	} catch (error) {
		throw error;
	}
};


module.exports.retrieveTechnology = async (id) => {
	try {
		const ok = await modelsTeclers.retrieveTechnology(id);
		return ok;
	} catch (error) {
		throw error;
	}
};

module.exports.AddPerformance = async (performance) => {
	try {
		const ok = await modelsTeclers.AddPerformance(performance);
		if (ok) {
			return true;
		}
		throw new Error('An internal error has ocurred, try later');
	} catch (error) {
		throw error;
	}
};


module.exports.retrievePerformance = async (id) => {
	try {
		const ok = await modelsTeclers.retrievePerformance(id);
		return ok;
	} catch (error) {
		throw error;
	}
};

module.exports.AddSoftSkills = async (soft) => {
	try {
		const ok = await modelsTeclers.AddSoftSkills(soft);
		if (ok) {
			return true;
		}
		throw new Error('An internal error has ocurred, try later');
	} catch (error) {
		throw error;
	}
};


module.exports.retrieveSoftSkills = async (id) => {
	try {
		const ok = await modelsTeclers.retrieveSoftSkills(id);
		return ok;
	} catch (error) {
		throw error;
	}
};

module.exports.AddProfEnv = async (profEnv) => {
	try {
		const ok = await modelsTeclers.AddProfEnv(profEnv);
		if (ok) {
			return true;
		}
		throw new Error('An internal error has ocurred, try later');
	} catch (error) {
		throw error;
	}
};

module.exports.retrieveProfEnv = async (id) => {
	try {
		const ok = await modelsTeclers.retrieveProfEnv(id);
		return ok;
	} catch (error) {
		throw error;
	}
};


module.exports.Addfeedback = async (comment) => {
	try {
		const ok = await modelsTeclers.Addfeedback(comment);
		if (ok) {
			return true;
		}
		throw new Error('An internal error has ocurred, try later');
	} catch (error) {
		throw error;
	}
};


module.exports.retrievefeedback = async (id) => {
	try {
		const ok = await modelsTeclers.retrievefeedback(id);
		return ok;
	} catch (error) {
		throw error;
	}
};

module.exports.AddExtraKnow = async (comment) => {
	try {
		const ok = await modelsTeclers.AddExtraKnow(comment);
		if (ok) {
			return true;
		}
		throw new Error('An internal error has ocurred, try later');
	} catch (error) {
		throw error;
	}
};


module.exports.retrieveExtraKnow = async (id) => {
	try {
		const ok = await modelsTeclers.retrieveExtraKnow(id);
		return ok;
	} catch (error) {
		throw error;
	}
};

module.exports.AddHobby = async (comment) => {
	try {
		const ok = await modelsTeclers.AddHobby(comment);
		if (ok) {
			return true;
		}
		throw new Error('An internal error has ocurred, try later');
	} catch (error) {
		throw error;
	}
};


module.exports.retrieveHobby = async (id) => {
	try {
		const ok = await modelsTeclers.retrieveHobby(id);
		return ok;
	} catch (error) {
		throw error;
	}
};



module.exports.AddLanguage = async (language) => {
	try {
		const ok = await modelsTeclers.AddLanguage(language);
		if (ok) {
			return true;
		}
		throw new Error('An internal error has ocurred, try later');
	} catch (error) {
		throw error;
	}
};

module.exports.retrieveLanguage = async (id) => {
	try {
		const ok = await modelsTeclers.retrieveLanguage(id);
		return ok;
	} catch (error) {
		throw error;
	}
};


module.exports.AddStudy = async (study) => {
	try {
		const ok = await modelsTeclers.AddStudy(study);
		if (ok) {
			return true;
		}
		throw new Error('An internal error has ocurred, try later');
	} catch (error) {
		throw error;
	}
};


module.exports.retrieveStudy = async (id) => {
	try {
		const ok = await modelsTeclers.retrieveStudy(id);
		return ok;
	} catch (error) {
		throw error;
	}
};

module.exports.SendConnectRequest = async (study) => {
	try {
		const ok = await modelsTeclers.SendConnectRequest(study);
		if (ok) {
			return true;
		}
		throw new Error('An internal error has ocurred, try later');
	} catch (error) {
		throw error;
	}
};

module.exports.retrieveConnectionRequests = async (id) => {
	try {
		const ok = await modelsTeclers.retrieveConnectionRequests(id);
		return ok;
	} catch (error) {
		throw error;
	}
};

module.exports.retrieveConnectionRecivedRequests = async (id) => {
	try {
		const ok = await modelsTeclers.retrieveConnectionRecivedRequests(id);
		return ok;
	} catch (error) {
		throw error;
	}
};


module.exports.SendAproveRequest = async (study) => {
	try {
		const ok = await modelsTeclers.SendAproveRequest(study);
		if (ok) {
			return true;
		}
		throw new Error('An internal error has ocurred, try later');
	} catch (error) {
		throw error;
	}
};
