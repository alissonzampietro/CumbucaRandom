window.onload = function()
{
	var nomes = [];
	let iniciar = document.getElementById('iniciar');

	iniciar.addEventListener('click', () => {

		let campo = document.getElementById('nomes');

		if(campo.value == "" && nomes.length === 0)
			return false;

		if(nomes.length === 0) 
			nomes = campo.value.split('-');

		let intervalo = setInterval(function() {
			let rand = nomes[Math.floor(Math.random() * nomes.length)];
			campo.value = rand;
		},20);

		setTimeout(function() {
			clearInterval(intervalo);
		},3000);
	});
}