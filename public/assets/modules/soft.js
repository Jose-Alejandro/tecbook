
async function getSoftSkills() {
	let result = await fetch('/users/teclers/' + tecler.id + '/softskills',
		{
			method: 'GET',
			headers: headers
		}
	);
	let res = await result.json();
	let table = document.getElementById('softTable');
	for (let i = 0; i < res.length; i++) {
		addInfoRow(table, res[i]);
	}
};

getSoftSkills();
