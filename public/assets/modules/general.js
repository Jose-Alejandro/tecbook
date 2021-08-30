
async function getGeneralTable() {
	let result = await fetch('/users/teclers/' + tecler.id,
		{
			method: 'GET',
			headers: headers
		}
	);
	let res = await result.json();
	let tmp = document.getElementById('generalName');
	tmp.textContent = res.names;
	tmp = document.getElementById('generalLastname');
	tmp.textContent = res.last_names;
	tmp = document.getElementById('generalEmail');
	tmp.textContent = res.email;
	tmp = document.getElementById('generalEdad');
	tmp.textContent = res.edad;
	tmp = document.getElementById('generalPhoto');
	tmp.textContent = res.linkedin_url;
	tmp = document.getElementById('generalLinkedin');
	tmp.textContent = res.photo_profile_url;
};

getGeneralTable();
