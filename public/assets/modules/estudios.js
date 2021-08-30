
async function getEstudios() {
	let result = await fetch('/users/teclers/' + tecler.id + '/studies',
		{
			method: 'GET',
			headers: headers
		}
	);
	let res = await result.json();
	let table = document.getElementById('estudiosTable');
	for (let i = 0; i < res.length; i++) {
		addStudiesRow(res[i], table);
	}
}

getEstudios();

function addStudiesRow(study, table) {
	let studyContainer = document.createElement('div');
	studyContainer.classList.add('row');

	let degree = document.createElement('div');
	degree.classList.add('col-4');
	degree.textContent = study.degree;

	let school = document.createElement('div');
	school.classList.add('col-4');
	school.textContent = study.school;

	let country = document.createElement('div');
	country.classList.add('col-4');
	country.textContent = study.country;

	studyContainer.appendChild(degree);
	studyContainer.appendChild(school);
	studyContainer.appendChild(country);
	table.appendChild(studyContainer);
}
