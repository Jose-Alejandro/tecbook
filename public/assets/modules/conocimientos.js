
async function getConocimientos() {
	let result = await fetch('/users/teclers/' + tecler.id + '/knowledge',
		{
			method: 'GET',
			headers: headers
		}
	);
	let res = await result.json();
	let table = document.getElementById('conocimientosTable');
	for (let i = 0; i < res.length; i++) {
		addInfoRow(table, res[i]);
	}
};

getConocimientos();
