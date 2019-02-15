const urlServidor = 'http://localhost:3000';
var idUsr = 0;

$(function(){
    cargaUsr();
});

$('#agregar').on('click', function(e){
    e.preventDefault();
    agregaUsr();
});

function cargaUsr(){
    $('lista').html('');
    $.ajax({
        url = urlServidor + '/usuarios/',
        method: 'GET',
        success: function(resultado){
            console.log(resultado);
            if(Array.isArray(resultado))
            {
                resultado.forEach(function(elemento){
                    $('lista').append(`<li class="list-group-item" id="$(elemento.id)"> Nombre: $(elemento.nombre) Password: $(elemento.password) </li>`);
                });
            }
            console.log(resultado);
        },
        error: function(err){
            console.log('Ocurrio un error');
            console.log(err);
        }
    })
}

function agregaUsr(){
    $.ajax({
        url: urlServidor + '/usuarios/',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({nombre: $('#nombre').val(), password: $('#password').val()}),
        success: function(resultado){
            console.log(resultado);
            cargaUsr();
        },
        error: function(err){
            console.log('Ocurrio un error al agregar');
            console.log(err);
        }
    })
}