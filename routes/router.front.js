var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'TecBook' });
});


router.get('/login', async (req, res, next) => {
	res.render('login', { title: 'TecBook' });
});

router.get('/register', async (req, res, next) => {
	res.render('register', { title: 'TecBook' });
});

router.get('/update', async (req, res, next) => {
	res.render('update', { title: 'TecBook' });
});

router.get('/profile', async (req, res, next) => {
	res.render('profile', { title: 'TecBook' });
});

module.exports = router;
