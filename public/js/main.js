// Declaração de variáveis globais
var tempoInicial = $('#tempo-digitacao').text();
var campoDigitacaoEl = $('.campo-digitacao');
var contadorCaracteresEl = $('#contador-caracteres');
var contadorPalavrasEl = $('#contador-palavras');
var botaoReiniciarEl = $('#botao-reiniciar');

// Quando o documento estiver pronto, execute:
$(function () {
  initFrase();
  initContadores();
  initCronometro();
  botaoReiniciarEl.click(restartGame);
});

/**
 * Função que realiza a contagem do tamnho da frase.
 */
function initFrase() {
  var fraseEl = $('.frase').text();
  var tamanhoFraseEl = $('#tamanho-frase');
  var numPalavrasFrase = fraseEl.split(' ').length;
  tamanhoFraseEl.text(numPalavrasFrase);
}

/**
 * Função que inicializa os contadores de caracteres.
 */
function initContadores() {
  campoDigitacaoEl.on('input', function () {
    var numCaracteresDigitadas = campoDigitacaoEl.val().replace(/\s+/g, '')
      .length;
    var numPalavrasDigitadas = campoDigitacaoEl.val().split(/\S+/).length - 1;

    contadorCaracteresEl.text(numCaracteresDigitadas);
    contadorPalavrasEl.text(numPalavrasDigitadas);
  });
}

/**
 * Função responsável gerenciar o tempo no jogo.
 */
function initCronometro() {
  var tempoRestante = $('#tempo-digitacao').text();
  // Usando a função one, esse evento só será disparado uma vez.
  campoDigitacaoEl.one('focus', function () {
    botaoReiniciarEl.attr('disabled', true);
    var interval = setInterval(function () {
      tempoRestante--;
      $('#tempo-digitacao').text(tempoRestante);

      if (tempoRestante <= 0) {
        campoDigitacaoEl.attr('disabled', true);
        botaoReiniciarEl.attr('disabled', false);
        campoDigitacaoEl.addClass('desativado');
        clearInterval(interval);
      }
    }, 1000);
  });
}

/**
 * Função responsável por reiniciar o jogo.
 */
function restartGame() {
  $('#tempo-digitacao').text(tempoInicial);
  campoDigitacaoEl.attr('disabled', false);
  campoDigitacaoEl.removeClass('desativado');
  campoDigitacaoEl.val('');

  contadorCaracteresEl.text('0');
  contadorPalavrasEl.text('0');

  initCronometro();
}
