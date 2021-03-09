$('#botao-placar').on('click', mostraPlacar);

/**
 * Função responsável por inserir partidas no placar do jogo.
 */
function insertPlacar() {
  let tabela = $('.placar').find('tbody');
  let usuario = 'Jamerson';
  let numPalavras = contadorPalavrasEl.text();

  let linha = novoTr(usuario, numPalavras);

  tabela.prepend(linha);
}

/**
 * Função responsável por mostrar ou não o placar.
 */
function mostraPlacar() {
  $('.placar').slideToggle(500);
}

/**
 * Função responsável por criar novos elementos de placar.
 * @param {string} usuario
 * @param {string} numPalavras
 */
function novoTr(usuario, numPalavras) {
  let linha = $('<tr>');
  let colUsuario = $('<td>').text(usuario);
  let colPalavras = $('<td>').text(numPalavras);
  let colRemover = $('<td>');
  let link = $('<a>').addClass('botao-remover').attr('href', '#');
  let icone = $('<i>')
    .addClass('small')
    .addClass('material-icons')
    .text('delete');

  link.append(icone);
  colRemover.append(link);
  linha.append(colUsuario);
  linha.append(colPalavras);
  linha.append(colRemover);

  linha.find('.botao-remover').on('click', function (event) {
    event.preventDefault();
    let placar = $(this).parent().parent();

    placar.fadeOut(1000);
    setTimeout(function () {
      placar.remove();
    }, 1000);
  });

  return linha;
}
