$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        var novoNome = $('#inputNome').val();
        var novoEmail = $('#inputEmail').val();
        var novoTelefone = $('#inputTelefone').val();

        $('#nomesCadastrados').append('<tr><td><span>'+novoNome+'</span></td><td><span>'+novoEmail+'</span></td><td><span>'+novoTelefone+'</span></td></tr>');
    
        $('#inputNome').val('');
        $('#inputEmail').val('');
        $('#inputTelefone').val('');
    })
});