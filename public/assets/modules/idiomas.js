
async function getIdiomas() {
	let result = await fetch('/users/teclers/' + tecler.id + '/languages',
		{
			method: 'GET',
			headers: headers
		}
	);
	let res = await result.json();
	let table = document.getElementById('idiomasTable');
	for (let i = 0; i < res.length; i++) {
		addIdioma(table, res[i]);
	}
};
getIdiomas();

const addIdioma = (table, r) => {
	let languageContainer = document.createElement('div');
	languageContainer.classList.add('row');

	let language = document.createElement('div');
	language.classList.add('col-4');
	language.textContent = r.language_name;

	let level = document.createElement('div');
	level.classList.add('col-4');
	level.textContent = r.level;

	languageContainer.appendChild(language);
	languageContainer.appendChild(level);
	table.appendChild(languageContainer);
};
