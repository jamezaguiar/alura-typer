var fraseEl = $('.frase').text();
var tamanhoFraseEl = $('#tamanho-frase');

var campoDigitacaoEl = $('.campo-digitacao');
var contadorCaracteresEl = $('#contador-caracteres');
var contadorPalavrasEl = $('#contador-palavras');

var numPalavrasFrase = fraseEl.split(' ').length;

tamanhoFraseEl.text(numPalavrasFrase);

campoDigitacaoEl.on('input', function () {
  var numCaracteresDigitadas = campoDigitacaoEl.val().replace(/\s+/g, '')
    .length;
  var numPalavrasDigitadas = campoDigitacaoEl.val().split(/\S+/).length - 1;

  contadorCaracteresEl.text(numCaracteresDigitadas);
  contadorPalavrasEl.text(numPalavrasDigitadas);
});
