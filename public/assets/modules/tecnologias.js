
async function getTecnologias() {
	let result = await fetch('/users/teclers/' + tecler.id + '/technologies',
		{
			method: 'GET',
			headers: headers
		}
	);
	let res = await result.json();
	let table = document.getElementById('tecnologiasTable');
	for (let i = 0; i < res.length; i++) {
		addInfoRow(table, res[i]);
	}
};

getTecnologias();

