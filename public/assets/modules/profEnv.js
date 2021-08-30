
async function getEnvironments() {
	let result = await fetch('/users/teclers/' + tecler.id + '/profesionalEnv',
		{
			method: 'GET',
			headers: headers
		}
	);
	let res = await result.json();
	let table = document.getElementById('environmentsTable');
	for (let i = 0; i < res.length; i++) {
		addInfoRow(table, res[i]);
	}
};

getEnvironments();
