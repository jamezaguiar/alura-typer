$('#botao-frase').on('click', fraseAleatoria);

function fraseAleatoria() {
  $.get('http://localhost:3000/frases', trocaFrase);
}

function trocaFrase(data) {
  let frase = $('.frase');

  let numAleatorio = Math.floor(Math.random() * data.length);

  frase.text(data[numAleatorio].texto);
}
