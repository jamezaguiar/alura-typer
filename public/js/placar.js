/**
 * Função responsável por inserir partidas no placar do jogo.
 */
function insertPlacar() {
  var tabela = $('.placar').find('tbody');
  var usuario = 'Jamerson';
  var numPalavras = contadorPalavrasEl.text();

  var linha = novoTr(usuario, numPalavras);

  tabela.prepend(linha);
}

/**
 * Função responsável por criar novos elementos de placar.
 * @param {Nome do usuário para ser inserido no placar} usuario
 * @param {Número de palavras digitadas pelo usuário} numPalavras
 */
function novoTr(usuario, numPalavras) {
  var linha = $('<tr>');
  var colUsuario = $('<td>').text(usuario);
  var colPalavras = $('<td>').text(numPalavras);
  var colRemover = $('<td>');
  var link = $('<a>').addClass('botao-remover').attr('href', '#');
  var icone = $('<i>')
    .addClass('small')
    .addClass('material-icons')
    .text('delete');

  link.append(icone);
  colRemover.append(link);
  linha.append(colUsuario);
  linha.append(colPalavras);
  linha.append(colRemover);

  linha.find('.botao-remover').click(function (event) {
    event.preventDefault();
    $(this).parent().parent().remove();
  });

  return linha;
}
