const Joi = require('joi');
const dataValidationModel = require('../DTO/dataValidationModel');


module.exports.validateLoginInfo = async (req, res, next) => {
	try {
		await Joi.attempt(req.body, dataValidationModel.loginModel, 'invalid login data');
		return next();
	} catch (error) {
		console.log(error.message);
		res.status(400).send(error.message);
	}
};

module.exports.validateRegisterInfo = async (req, res, next) => {
	try {
		await Joi.attempt(req.body, dataValidationModel.registerModel, 'invalid user data');
		return next();
	} catch (error) {
		console.log(error.message);
		res.status(400).send(error.message);
	}
};

module.exports.validateProfileInfo = async (req, res, next) => {
	try {
		await Joi.attempt(req.body, dataValidationModel.profile_info, 'invalid data');
		return next();
	} catch (error) {
		console.log(error.message);
		res.status(400).send(error.message);
	}
};

module.exports.validatefeedbackInfo = async (req, res, next) => {
	try {
		await Joi.attempt(req.body, dataValidationModel.feedbackModel, 'invalid comment');
		return next();
	} catch (error) {
		console.log(error.message);
		res.status(400).send(error.message);
	}
};

module.exports.validateHobbiesInfo = async (req, res, next) => {
	try {
		await Joi.attempt(req.body, dataValidationModel.hobbiesModel, 'invalid comment');
		return next();
	} catch (error) {
		console.log(error.message);
		res.status(400).send(error.message);
	}
};

module.exports.validateLanguagesInfo = async (req, res, next) => {
	try {
		await Joi.attempt(req.body, dataValidationModel.languagesModel, 'invalid language');
		return next();
	} catch (error) {
		console.log(error.message);
		res.status(400).send(error.message);
	}
};

module.exports.validateStudiesInfo = async (req, res, next) => {
	try {
		await Joi.attempt(req.body, dataValidationModel.studiesModel, 'invalid comment');
		return next();
	} catch (error) {
		console.log(error.message);
		res.status(400).send(error.message);
	}
};
