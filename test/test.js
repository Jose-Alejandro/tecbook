const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:' + process.env.PORT;

/** Test Endpoints and middlewares */
describe('Test user endpoints', () => {
	describe('When registering a new user', () => {
		it('Test for email validation', (done) => {
			chai.request(url).post('/users/register')
				.send(
					{
						"names": "alejandro",
						"last_names": "esquivel",
						"email": "alexmail.mail.com",
						"password": "pass12"
					}
				)
				.end((err, res) => {
					expect(res).to.have.status(400);
					done();
				});
		});
	});
	describe('When login with user', () => {
		it('Test for email and password', (done) => {
			chai.request(url).post('/users/login')
				.send(
					{
						"email": "alexmail@mail.com",
					}
				)
				.end((err, res) => {
					expect(res).to.have.status(400);
					done();
				});
		});
	});
	describe('When getting a user information', () => {
		it('Test valid JWT', (done) => {
			chai.request(url).get('/users/user')
				.set('Authorization', 'Bearer xxx')
				.end((err, res) => {
					expect(res).to.have.status(500);
					done();
				});
		});
	});
	describe('When updating password', () => {
		it('Test valid for name, last names, email, password and valid jwt', (done) => {
			chai.request(url).get('/users/user')
				.set('Authorization', 'Bearer xxx')
				.send({
					"names": "Alex",
					"last_names": "Esquivel",
					"email": "alexmail@mail.com",
					"password": "pass13"
				})
				.end((err, res) => {
					expect(res).to.have.status(500);
					done();
				});
		});
	});
});


describe('Test teclers endpoints', () => {
	describe('When posting knowledge', () => {
		it('test for valid knowledge object', () => {
			chai.request(url).post('/users/teclers/1/knowledge')
				.set('Authorization', 'Bearer XXX')
				.send({
					"id_user": 1,
					"name": "Seguridad",
					"rating": 4
				})
				.end((err, res) => {
					expect(res).to.have.status(500);
				});
		});
	});

	describe('When getting knowledge data', () => {
		it('test for authorized request', () => {
			chai.request(url)
				.get('/users/teclers/1/knowledge')
				.set('Authorization', 'Bearer XXX')
				.end((err, res) => {
					expect(res).to.have.status(500);
				});
		});
	});

	describe('When posting technolgies', () => {
		it('test for valid authoried request object', () => {
			chai.request(url).post('/users/teclers/1/technologies')
				.set('Authorization', 'Bearer XXX')
				.send({
					"id_user": 1,
					"name": "Seguridad",
					"rating": 4
				})
				.end((err, res) => {
					expect(res).to.have.status(500);
				});
		});
	});

	describe('When getting technologies information', () => {
		it('test for authorized request', () => {
			chai.request(url)
				.get('/users/teclers/1/technologies')
				.set('Authorization', 'Bearer XXX')
				.end((err, res) => {
					expect(res).to.have.status(500);
				});
		});
	});

	describe('When posting performance information', () => {
		it('test for valid authorized request object', () => {
			chai.request(url).post('/users/teclers/1/performance')
				.set('Authorization', 'Bearer XXX')
				.send({
					"id_user": 1,
					"name": "Velocidad de entrega ",
					"rating": 5
				})
				.end((err, res) => {
					expect(res).to.have.status(500);
				});
		});
	});

	describe('When getting performance information', () => {
		it('test for authorized request', () => {
			chai.request(url)
				.get('/users/teclers/1/performance')
				.set('Authorization', 'Bearer XXX')
				.end((err, res) => {
					expect(res).to.have.status(500);
				});
		});
	});


	describe('When posting a feedback comment', () => {
		it('test for valid authorized request object', () => {
			chai.request(url).post('/users/teclers/1/feedback')
				.set('Authorization', 'Bearer XXX')
				.send({
					"id_user": 1,
					"comment": "eres muy bueno"
				})
				.end((err, res) => {
					expect(res).to.have.status(500);
				});
		});
	});

	describe('When retrieving feedback comments', () => {
		it('test for authorized request', () => {
			chai.request(url)
				.get('/users/teclers/1/feedback')
				.set('Authorization', 'Bearer XXX')
				.end((err, res) => {
					expect(res).to.have.status(500);
				});
		});
	});
});
