
let session = sessionStorage.getItem('userSession');
if (session == null) {
	location.href = '/login';
}
sessionStorage.removeItem('tecler');

const headers = {
	"Accept": "application/json, text/plain, */*",
	'Content-Type': 'application/json',
	'Authorization': 'Bearer ' + session
};

async function getTeclersTable() {
	let result = await fetch('/users/teclers',
		{
			method: 'GET',
			headers: headers
		}
	);
	let res = await result.json();
	let table = document.getElementById('teclers-table');
	for (let i = 0; i < res.length; i++) {
		createRow(table, res[i]);
	}
}

getTeclersTable();


const createRow = (table, r) => {
	let teclerRow = document.createElement('div');
	teclerRow.classList.add('row');

	let id = document.createElement('div');
	id.classList.add('col-1');
	id.textContent = r.id;

	let names = document.createElement('div');
	names.classList.add('col-2');
	names.textContent = r.names;

	let email = document.createElement('div');
	email.classList.add('col-2');
	email.textContent = r.email;

	let linkedin = document.createElement('div');
	linkedin.classList.add('col-1');
	linkedin.textContent = r.linkedin;

	table.appendChild(teclerRow);
	teclerRow.appendChild(id);
	teclerRow.appendChild(names);
	teclerRow.appendChild(email);
	teclerRow.appendChild(linkedin);

	let profileDiv = document.createElement('div');
	profileDiv.classList.add('col-1');
	let prof = document.createElement('a');
	prof.textContent = 'Ver_Perfil';
	prof.classList.add('btn');
	prof.classList.add('btn-outline-primary');
	prof.classList.add('btn-sm');
	prof.setAttribute("id", 'env' + r.id);
	prof.setAttribute("onclick", `viewProfile('${r.id}','${r.names}')`);
	profileDiv.appendChild(prof);
	teclerRow.appendChild(profileDiv);
};

let newBudgetButton = document.getElementById('create');

async function viewProfile(id, names) {
	let tecler = {
		id: id,
		names: names,
	};
	console.log(JSON.stringify(tecler));
	sessionStorage.setItem('tecler', JSON.stringify(tecler));
	location.href = '/profile';
}
