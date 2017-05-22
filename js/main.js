window.onload = function()
{
	let nomes = ['Alisson','Jéssica','Rafa','Letícia','Peterson'];
	let divNomes = document.getElementsByClassName('nomes');
	nomes.map((valor,i) => {
		divNomes[0].innerHTML += valor;
		if((nomes.length - 1) > i )
			divNomes[0].innerHTML += ' - ';
	})
	let iniciar = document.getElementById('iniciar');


	iniciar.addEventListener('click', () => {
		let intervalo = setInterval(function() {
			let rand = nomes[Math.floor(Math.random() * nomes.length)];
			divNomes[0].innerHTML = rand;
		},40);

		setTimeout(function() {
			clearInterval(intervalo);
		},3000);
	});
}