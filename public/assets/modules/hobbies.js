
async function getHobbies() {
	let result = await fetch('/users/teclers/' + tecler.id + '/hobbies',
		{
			method: 'GET',
			headers: headers
		}
	);
	let res = await result.json();
	let table = document.getElementById('hobbiesTable');
	for (let i = 0; i < res.length; i++) {
		addSingleItem(table, res[i]);
	}
};
getHobbies();
