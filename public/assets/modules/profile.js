
let session = sessionStorage.getItem('userSession');
if (session == null) {
	location.href = '/login';
}
const headers = {
	"Accept": "application/json, text/plain, */*",
	'Content-Type': 'application/json',
	'Authorization': 'Bearer ' + session
};

let tecler = JSON.parse(sessionStorage.getItem('tecler'));

let teclerName = document.getElementById('teclerName');
teclerName.textContent = 'Perfil de: ' + tecler.names;

const addInfoRow = (table, r) => {
	let infoContainer = document.createElement('div');
	infoContainer.classList.add('row');

	let name = document.createElement('div');
	name.classList.add('col-4');
	name.textContent = r.name;

	let rating = document.createElement('div');
	rating.classList.add('col-4');
	rating.textContent = r.rating;

	infoContainer.appendChild(name);
	infoContainer.appendChild(rating);
	table.appendChild(infoContainer);
};

const addSingleItem = (table, r) => {
	let itemContainer = document.createElement('div');
	itemContainer.classList.add('row');

	let item = document.createElement('div');
	item.classList.add('col-4');
	item.textContent = (r.hobbie == null) ? r.comment : r.hobbie;

	itemContainer.appendChild(item);
	table.appendChild(itemContainer);
};
