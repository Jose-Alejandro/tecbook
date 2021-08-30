var express = require('express');
var router = express.Router();

const midd = require('../../middlewares/middlewares');
const controlersUsers = require('../controllers/controllers.Users');
const DTO = require('../../DTO/dataValidation');


router.post('/register', DTO.validateRegisterInfo, async (req, res) => {
	try {
		const ok = await controlersUsers.registerUser(req.body);
		if (ok) {
			res.status(200).json(req.body);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).json('error: ' + error.message);
	}
});

router.post('/registerAdmin', DTO.validateRegisterInfo, async (req, res) => {
	try {
		const ok = await controlersUsers.registerAdminUser(req.body);
		if (ok) {
			res.status(200).json(req.body);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).json('error: ' + error.message);
	}
});

router.post('/login', DTO.validateLoginInfo, async (req, res) => {
	try {
		const ok = await controlersUsers.validateUser(req.body);
		let sessionToken = await controlersUsers.generateUserToken(ok);
		res.status(200).json(sessionToken);
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).json(error.message);
	}
});

router.get('/user', midd.validateToken, async (req, res) => {
	try {
		let user = await controlersUsers.retrieveUser(req.params.user);
		res.status(200).json(user);
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).json(error.message);
	}
});

router.get('/teclers', midd.validateToken, async (req, res) => {
	try {
		let users = await controlersUsers.retrieveTeclers();
		res.status(200).json(users);
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).json(error.message);
	}
});

router.post('/update', midd.validateToken, DTO.validateRegisterInfo, async (req, res) => {
	try {
		let result = await controlersUsers.modifyUser(req.body, req.params.user);
		if (result) {
			res.status(200).json(result);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).json('error: ' + error.message);
	}
});

module.exports = router;
