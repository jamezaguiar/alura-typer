$('#botao-frase').click(fraseAleatoria);
$('#botao-frase-id').click(buscaFrase);

function fraseAleatoria() {
  $('#spinner').show();
  $.get('http://localhost:3000/frases', trocaFraseAleatoria)
    .fail(function () {
      $('#erro').show();
      setTimeout(function () {
        $('#erro').hide();
      }, 3000);
    })
    .always(function () {
      $('#spinner').hide();
    });
}

function trocaFraseAleatoria(data) {
  let frase = $('.frase');
  let numeroAleatorio = Math.floor(Math.random() * data.length);

  frase.text(data[numeroAleatorio].texto);
  atualizaTamanhoFrase();
  atualizaTempoInicial(data[numeroAleatorio].tempo);
}

function buscaFrase(id) {
  $('#spinner').show();
  let fraseId = $('#frase-id-input').val();

  $.get('http://localhost:3000/frases', { id: fraseId }, trocaFrase)
    .fail(function () {
      $('#erro').show();
      setTimeout(function () {
        $('#erro').hide();
      }, 3000);
    })
    .always(function () {
      $('#spinner').hide();
    });
}

function trocaFrase(data) {
  let frase = $('.frase');
  frase.text(data.texto);
  atualizaTamanhoFrase();
  atualizaTempoInicial(data.tempo);
}
