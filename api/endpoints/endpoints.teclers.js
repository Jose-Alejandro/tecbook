var express = require('express');
var router = express.Router();

const midd = require('../../middlewares/middlewares');
const controlersTeclers = require('../controllers/controllers.Teclers');
const dto = require('../../DTO/dataValidation');


router.get('/:id/', midd.validateToken, async (req, res) => {
	try {
		const ok = await controlersTeclers.retrieveTecler(req.params.id);
		if (ok) {
			res.status(200).json(ok);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).json('error: ' + error.message);
	}
});

router.post('/:id/knowledge', midd.validateToken, dto.validateProfileInfo, midd.validateAdminRol, async (req, res) => {
	try {
		req.body.id_user = req.params.id;
		const ok = await controlersTeclers.AddKnowledge(req.body);
		if (ok) {
			res.status(200).json(req.body);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).json('error: ' + error.message);
	}
});

router.get('/:id/knowledge', midd.validateToken, async (req, res) => {
	try {
		const ok = await controlersTeclers.retrieveKnowledges(req.params.id);
		if (ok) {
			res.status(200).json(ok);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).json('error: ' + error.message);
	}
});

router.post('/:id/technologies', midd.validateToken, dto.validateProfileInfo, midd.validateAdminRol, async (req, res) => {
	try {
		req.body.id_user = req.params.id;
		const ok = await controlersTeclers.AddTechnology(req.body);
		if (ok) {
			res.status(200).json(req.body);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).json('error: ' + error.message);
	}
});

router.get('/:id/technologies', midd.validateToken, async (req, res) => {
	try {
		const ok = await controlersTeclers.retrieveTechnology(req.params.id);
		if (ok) {
			res.status(200).json(ok);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).json('error: ' + error.message);
	}
});

router.post('/:id/performance', midd.validateToken, dto.validateProfileInfo, midd.validateAdminRol, async (req, res) => {
	try {
		req.body.id_user = req.params.id;
		const ok = await controlersTeclers.AddPerformance(req.body);
		if (ok) {
			res.status(200).json(req.body);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).json('error: ' + error.message);
	}
});

router.get('/:id/performance', midd.validateToken, async (req, res) => {
	try {
		const ok = await controlersTeclers.retrievePerformance(req.params.id);
		if (ok) {
			res.status(200).json(ok);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).json('error: ' + error.message);
	}
});

router.post('/:id/softskills', midd.validateToken, dto.validateProfileInfo, midd.validateAdminRol, async (req, res) => {
	try {
		req.body.id_user = req.params.id;
		const ok = await controlersTeclers.AddSoftSkills(req.body);
		if (ok) {
			res.status(200).json(req.body);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).json('error: ' + error.message);
	}
});

router.get('/:id/softskills', midd.validateToken, async (req, res) => {
	try {
		const ok = await controlersTeclers.retrieveSoftSkills(req.params.id);
		if (ok) {
			res.status(200).json(ok);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).json('error: ' + error.message);
	}
});

router.post('/:id/profesionalEnv', midd.validateToken, dto.validateProfileInfo, midd.validateAdminRol, async (req, res) => {
	try {
		req.body.id_user = req.params.id;
		const ok = await controlersTeclers.AddProfEnv(req.body);
		if (ok) {
			res.status(200).json(req.body);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).send('error: ' + error.message);
	}
});

router.get('/:id/profesionalEnv', midd.validateToken, async (req, res) => {
	try {
		const ok = await controlersTeclers.retrieveProfEnv(req.params.id);
		if (ok) {
			res.status(200).json(ok);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).send('error: ' + error.message);
	}
});

router.post('/:id/feedback', midd.validateToken, dto.validatefeedbackInfo, async (req, res) => {
	try {
		req.body.id_user = req.params.id;
		const ok = await controlersTeclers.Addfeedback(req.body);
		if (ok) {
			res.status(200).json(req.body);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).send('error: ' + error.message);
	}
});

router.get('/:id/feedback', midd.validateToken, async (req, res) => {
	try {
		const ok = await controlersTeclers.retrievefeedback(req.params.id);
		if (ok) {
			res.status(200).json(ok);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).send('error: ' + error.message);
	}
});

router.post('/:id/extraknowledge', midd.validateToken, dto.validateProfileInfo, async (req, res) => {
	try {
		req.body.id_user = req.params.id;
		const ok = await controlersTeclers.AddExtraKnow(req.body);
		if (ok) {
			res.status(200).json(req.body);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).send('error: ' + error.message);
	}
});

router.get('/:id/extraknowledge', midd.validateToken, async (req, res) => {
	try {
		const ok = await controlersTeclers.retrieveExtraKnow(req.params.id);
		if (ok) {
			res.status(200).json(ok);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).send('error: ' + error.message);
	}
});

router.post('/:id/hobbies', midd.validateToken, dto.validateHobbiesInfo, async (req, res) => {
	try {
		req.body.id_user = req.params.id;
		const ok = await controlersTeclers.AddHobby(req.body);
		if (ok) {
			res.status(200).json(req.body);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).send('error: ' + error.message);
	}
});

router.get('/:id/hobbies', midd.validateToken, async (req, res) => {
	try {
		const ok = await controlersTeclers.retrieveHobby(req.params.id);
		if (ok) {
			res.status(200).json(ok);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).send('error: ' + error.message);
	}
});

router.post('/:id/languages', midd.validateToken, dto.validateLanguagesInfo, async (req, res) => {
	try {
		req.body.id_user = req.params.id;
		const ok = await controlersTeclers.AddLanguage(req.body);
		if (ok) {
			res.status(200).json(req.body);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).send('error: ' + error.message);
	}
});

router.get('/:id/languages', midd.validateToken, async (req, res) => {
	try {
		const ok = await controlersTeclers.retrieveLanguage(req.params.id);
		if (ok) {
			res.status(200).json(ok);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).send('error: ' + error.message);
	}
});

router.post('/:id/studies', midd.validateToken, dto.validateStudiesInfo, async (req, res) => {
	try {
		req.body.id_user = req.params.id;
		const ok = await controlersTeclers.AddStudy(req.body);
		if (ok) {
			res.status(200).json(req.body);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).send('error: ' + error.message);
	}
});

router.get('/:id/studies', midd.validateToken, async (req, res) => {
	try {
		const ok = await controlersTeclers.retrieveStudy(req.params.id);
		if (ok) {
			res.status(200).json(ok);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).send('error: ' + error.message);
	}
});

router.post('/:id/connect', midd.validateToken, async (req, res) => {
	try {
		req.body.id_user = req.params.id;
		const ok = await controlersTeclers.SendConnectRequest(req.body);
		if (ok) {
			res.status(200).json(req.body);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).send('error: ' + error.message);
	}
});

router.get('/:id/connect', midd.validateToken, async (req, res) => {
	try {
		const ok = await controlersTeclers.retrieveConnectionRequests(req.params.id);
		if (ok) {
			res.status(200).json(ok);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).send('error: ' + error.message);
	}
});

router.get('/:id/recived_connect', midd.validateToken, async (req, res) => {
	try {
		const ok = await controlersTeclers.retrieveConnectionRecivedRequests(req.params.id);
		if (ok) {
			res.status(200).json(ok);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).send('error: ' + error.message);
	}
});

router.post('/:id/aproveRequest', midd.validateToken, async (req, res) => {
	try {
		const ok = await controlersTeclers.SendAproveRequest(req.body);
		if (ok) {
			res.status(200).json(req.body);
		} else
			throw new Error('Internal error with the server, try again later');
	} catch (error) {
		console.log('error: ' + error.message);
		res.status(400).send('error: ' + error.message);
	}
});

module.exports = router;
