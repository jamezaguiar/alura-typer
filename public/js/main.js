var fraseEl = $('.frase').text();
var tamanhoFraseEl = $('#tamanho-frase');

var numPalavras = fraseEl.split(' ').length;
tamanhoFraseEl.text(numPalavras);
