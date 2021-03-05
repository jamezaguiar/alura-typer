// Declaração de variáveis globais
var frase = $('.frase').text().trim();
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
  initBordas();
  botaoReiniciarEl.click(restartGame);
});

/**
 * Função que realiza a contagem do tamnho da frase.
 */
function initFrase() {
  var tamanhoFrase = $('#tamanho-frase');
  var numPalavrasFrase = frase.split(' ').length;
  tamanhoFrase.text(numPalavrasFrase);
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
 * Função responsável por gerenciar o placar do jogo.
 */
function insertPlacar() {
  var tabela = $('.placar').find('tbody');
  var usuario = 'Jamerson';
  var numPalavras = contadorPalavrasEl.text();

  var linha = `
    <tr>
      <td>${usuario}</td>
      <td>${numPalavras}</td>
    </tr>
  `;

  tabela.prepend(linha);
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
