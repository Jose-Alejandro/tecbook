
async function getEnvironments() {
	let result = await fetch('/users/teclers/' + tecler.id + '/feedback',
		{
			method: 'GET',
			headers: headers
		}
	);
	let res = await result.json();
	let table = document.getElementById('feedbackTable');
	for (let i = 0; i < res.length; i++) {
		addSingleItem(table, res[i]);
	}
};

getEnvironments();

