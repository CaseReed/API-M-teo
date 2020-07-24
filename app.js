let ville = "Paris";
recevoirTemperature(ville);

let changerDeVille = document.querySelector('#changer');

changerDeVille.addEventListener('click', () => {
	ville = prompt('Choissiez une ville.');
	recevoirTemperature(ville);
})

function recevoirTemperature(ville){
	const url = 'http://api.openweathermap.org/data/2.5/weather?q='+ville+'&appid=0e741dfcdb2a676da872c6adb1d1ec43&units=metric';

	let requete = new XMLHttpRequest();

	requete.open('GET', url);
	requete.responseType = 'json';
	requete.send();

	requete.onload = function () {
		if (requete.readyState === XMLHttpRequest.DONE){
			if (requete.status === 200){
				let reponse = requete.response;
				let temperature = reponse.main.temp;
				let ville = reponse.name;

				document.querySelector('#temperature_label').textContent = temperature;
				document.querySelector('#ville').textContent = ville;

			} else {
				alert('Un problème est intervenu, merci de revenir plus tard.');
			}
		}
	}
}