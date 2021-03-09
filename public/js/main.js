// Declaração de variáveis globais
let frase = $('.frase').text().trim();
let tempoInicial = $('#tempo-digitacao').text();
let campoDigitacaoEl = $('.campo-digitacao');
let contadorCaracteresEl = $('#contador-caracteres');
let contadorPalavrasEl = $('#contador-palavras');
let botaoReiniciarEl = $('#botao-reiniciar');

// Quando o documento estiver pronto, execute:
$(function () {
  initFrase();
  initContadores();
  initCronometro();
  initBordas();
  botaoReiniciarEl.on('click', restartGame);
});

/**
 * Função que realiza a contagem do tamanho da frase.
 */
function initFrase() {
  let tamanhoFrase = $('#tamanho-frase');
  let numPalavrasFrase = frase.split(' ').length;
  tamanhoFrase.text(numPalavrasFrase);
}

/**
 * Função que inicializa os contadores de caracteres.
 */
function initContadores() {
  campoDigitacaoEl.on('input', function () {
    let numCaracteresDigitadas = campoDigitacaoEl.val().replace(/\s+/g, '')
      .length;
    let numPalavrasDigitadas = campoDigitacaoEl.val().split(/\S+/).length - 1;

    contadorCaracteresEl.text(numCaracteresDigitadas);
    contadorPalavrasEl.text(numPalavrasDigitadas);
  });
}

/**
 * Função responsável gerenciar o tempo no jogo.
 */
function initCronometro() {
  let tempoRestante = $('#tempo-digitacao').text();
  // Usando a função one, esse evento só será disparado uma vez.
  campoDigitacaoEl.one('focus', function () {
    botaoReiniciarEl.attr('disabled', true);
    let interval = setInterval(function () {
      tempoRestante--;
      $('#tempo-digitacao').text(tempoRestante);

      if (tempoRestante <= 0) {
        clearInterval(interval);
        endGame();
      }
    }, 1000);
  });
}

function endGame() {
  campoDigitacaoEl.attr('disabled', true);
  botaoReiniciarEl.attr('disabled', false);
  campoDigitacaoEl.addClass('desativado');
  insertPlacar();
}

/**
 * Função responsável por inicializar as bordas dinâmicas do campo de digitação.
 */
function initBordas() {
  campoDigitacaoEl.on('input', function () {
    if (
      frase.substr(0, campoDigitacaoEl.val().length) === campoDigitacaoEl.val()
    ) {
      campoDigitacaoEl.addClass('correto');
      campoDigitacaoEl.removeClass('incorreto');
    } else {
      campoDigitacaoEl.addClass('incorreto');
      campoDigitacaoEl.removeClass('correto');
    }
  });
}

/**
 * Função responsável por reiniciar o jogo.
 */
function restartGame() {
  $('#tempo-digitacao').text(tempoInicial);
  campoDigitacaoEl.attr('disabled', false);
  campoDigitacaoEl.removeClass('desativado');
  campoDigitacaoEl.removeClass('correto');
  campoDigitacaoEl.removeClass('incorreto');
  campoDigitacaoEl.val('');

  contadorCaracteresEl.text('0');
  contadorPalavrasEl.text('0');

  initCronometro();
}
