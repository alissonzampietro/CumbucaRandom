window.onload = function()
{
	var nomes = ['Bem vindo','Welcome','Bienvenido'];
	let iniciar = document.getElementById('iniciar');

	iniciar.addEventListener('click', () => {

		let campoNome = document.getElementById('nomes').value;
		let flagNome = campoNome.split('-');

		if(flagNome.length > 1)
			nomes = flagNome;

		let intervalo = setInterval(function() {
			let rand = nomes[Math.floor(Math.random() * nomes.length)];
			document.getElementById('nomes').value = rand;
		},20);

		setTimeout(function() {
			clearInterval(intervalo);
		},2000);
	});
}