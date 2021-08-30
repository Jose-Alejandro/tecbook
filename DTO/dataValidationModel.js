const Joi = require('joi');

module.exports = {
	loginModel: Joi.object().keys(
		{
			email: Joi.string().email().required(),
			password: Joi.string().regex(/^[a-zA-Z0-9]{4,16}$/).min(4).required()
		}).with('email', 'password'),

	registerModel: Joi.object().keys(
		{
			names: Joi.string().regex(/^[a-zA-Z\s]*$/).min(4).required(),
			last_names: Joi.string().regex(/^[a-zA-Z\s]*$/).min(4),
			email: Joi.string().email().required(),
			password: Joi.string().regex(/^[a-zA-Z0-9]{4,16}$/).min(4).required(),
			edad: Joi.number().min(18),
			photo_profile_url: Joi.string(),
			linkedin_url: Joi.string()
		}).with('email', 'password'),

	profile_info: Joi.object().keys(
		{
			id_user: Joi.number().required(),
			name: Joi.string().required(),
			rating: Joi.number().integer(),
		}),

	feedbackModel: Joi.object().keys(
		{
			id_user: Joi.number().integer().required(),
			comment: Joi.string().required(),
		}),

	hobbiesModel: Joi.object().keys(
		{
			id_user: Joi.number().integer().required(),
			hobbie: Joi.string().required(),
		}),

	languagesModel: Joi.object().keys(
		{
			id_user: Joi.number().integer().required(),
			language_name: Joi.string().required(),
			level: Joi.string().required(),
		}),

	studiesModel: Joi.object().keys(
		{
			id_user: Joi.number().integer().required(),
			degree: Joi.string().required(),
			school: Joi.string().required(),
			country: Joi.string().required(),
		}),

};
