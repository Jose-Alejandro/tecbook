
async function getEnvironments() {
	let result = await fetch('/users/teclers/' + tecler.id + '/extraknowledge',
		{
			method: 'GET',
			headers: headers
		}
	);
	let res = await result.json();
	let table = document.getElementById('extraTable');
	for (let i = 0; i < res.length; i++) {
		addInfoRow(table, res[i]);
	}
};

getEnvironments();
