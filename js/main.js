let nomes = ['Bem vindo','Welcome','Bienvenido'];

let shuffle =  (o) => {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


let generateRandomName = () => {
	let campoNome = document.getElementById('nomes').value;
	let flagNome = campoNome.split('-');

	if(flagNome.length > 1)
		nomes = flagNome;

	let intervalo = setInterval(() => {
		let novoNome = shuffle(nomes);
		let rand = novoNome[Math.floor(Math.random() * novoNome.length)];
		console.log(shuffle(nomes));
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
