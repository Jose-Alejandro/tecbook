
async function getPerformance() {
	let result = await fetch('/users/teclers/' + tecler.id + '/performance',
		{
			method: 'GET',
			headers: headers
		}
	);
	let res = await result.json();
	let table = document.getElementById('performanceTable');
	for (let i = 0; i < res.length; i++) {
		addInfoRow(table, res[i]);
	}
};

getPerformance();
