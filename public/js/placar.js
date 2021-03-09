$("#botao-placar").click(mostraPlacar);

function inserePlacar() {
  let corpoTabela = $(".placar").find("tbody");
  let usuario = "Jamerson";
  let numPalavras = $("#contador-palavras").text();

  let linha = novaLinha(usuario, numPalavras);
  linha.find(".botao-remover").click(removeLinha);

  corpoTabela.append(linha);
  $(".placar").slideDown(500);
  scrollPlacar();
}

function scrollPlacar() {
  let posicaoPlacar = $(".placar").offset().top;
  $("body").animate(
    {
      scrollTop: posicaoPlacar + "px",
    },
    1000
  );
}

function novaLinha(usuario, palavras) {
  let linha = $("<tr>");
  let colunaUsuario = $("<td>").text(usuario);
  let colunaPalavras = $("<td>").text(palavras);
  let colunaRemover = $("<td>");

  let link = $("<a>").addClass("botao-remover").attr("href", "#");
  let icone = $("<i>")
    .addClass("small")
    .addClass("material-icons")
    .text("delete");

  link.append(icone);

  colunaRemover.append(link);

  linha.append(colunaUsuario);
  linha.append(colunaPalavras);
  linha.append(colunaRemover);

  return linha;
}

function removeLinha() {
  event.preventDefault();
  let linha = $(this).parent().parent();

  linha.fadeOut(1000);
  setTimeout(function () {
    linha.remove();
  }, 1000);
}

function mostraPlacar() {
  $(".placar").stop().slideToggle(600);
}
