let nomes = ['Bem vindo','Welcome','Bienvenido'];

let generateRandomName = () => {
	let campoNome = document.getElementById('nomes').value;
	let flagNome = campoNome.split('-');

	if(flagNome.length > 1)
		nomes = flagNome;

	let intervalo = setInterval(() => {
		let rand = nomes[Math.floor(Math.random() * nomes.length)];
		document.getElementById('nomes').value = rand;
	},20);

	setTimeout(() => {
		clearInterval(intervalo);
	},2000);
}

window.onload = () => {
	let iniciar = document.getElementById('iniciar');

	iniciar.addEventListener('click', () => {
		generateRandomName();
	});

	window.onkeypress = (e) => {
		if(e.charCode === 13)
			generateRandomName();
	}
}
