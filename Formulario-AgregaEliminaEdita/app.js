const urlServidor = 'http://localhost:3000';
// const urlServidor = "https://gentle-escarpment-77629.herokuapp.com";
var idUsuario = 0;

$(function(){
    cargaUsuarios();
   //agregaUsuario();
});

$('ul').on('click','.editar',function(){
    idUsuario = $(this).parent().attr('id');
    $.ajax({
        url: urlServidor + "/usuarios/" + idUsuario,
        method: 'GET',
        success: function(resultado){
            console.log(resultado + idUsuario);
            $('#editar-nombre').val(resultado.nombre);
            $('#editar-pwd').val(resultado.password);
            $('#modal-editar').modal();
        },
        error: function(err){
            console.log('Ocurrio un error');
            console.log(err);
        }
    });
});

$('#actualizar').on('click',function(evento){
    //Hacer la solicitud con Ajax al servidor para actualizar el usuario
    evento.preventDefault();
    console.log("Actualizando usuario...");
    $.ajax({
        url: urlServidor + '/usuarios/' + idUsuario,
        method: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify({nombre: $('#editar-nombre').val(), password: $('#editar-pwd').val()}),
        success: function(resultado){
            console.log(resultado);
            $('#lista-usuarios').html('');
            cargaUsuarios();
            $('#modal-editar').modal('hide');
        },
        error: function(err){
            console.log('Ocurrio un error');
            console.log(err);
        }
    });
});

$('ul').on('click','.borrar',function(){
   idUsuario = $(this).parent().attr('id');
   console.log('Borrando usuario ' + idUsuario);
   //borrarUsuario(id);
   //$('#id-borrar').text(id);
   //$('#mi-modal').modal();
});

$('#eliminar').on('click',function(){
    console.log('Borrando el usuario' + idUsuario);
    borrarUsuario(idUsuario);
});

$('#agregar').on('click',function(e){
    e.preventDefault();
    agregaUsuario();
});

//Agregar usuario desde un formulario
function agregaUsuario(){
    $.ajax({
        url: urlServidor + '/usuarios/',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({nombre: $('#nombre').val(), password: $('#pwd').val()}),
        success: function(resultado){
            console.log(resultado);
            cargaUsuarios();
            //Tarea desplegar los usuarios en la lista
        },
        error: function(err){
            console.log('Ocurrio un error');
            console.log(err);
        }
    });
}

function cargaUsuarios(){
    $('#lista-usuarios').html('');
    $.ajax({
        url: urlServidor + '/usuarios/',
        method: 'GET',
        success: function(resultado){
            console.log(resultado);
            if(Array.isArray(resultado))
            {
                resultado.forEach(function(elemento){
                    $('#lista-usuarios').append(`<li class="list-group-item" id="${elemento.id}">  Nombre: ${elemento.nombre}  Password: ${elemento.password} <button class="borrar" data-toggle="modal" data-target="#mi-modal"><i class="fa fa-trash-o" aria-hidden="true"></i></button> <button data-target="#modal-editar" class="editar btn-sm btn-warning"><span><i class="fa fa-pencil-square" aria-hidden="true"></i></span></button></li>`);
                });
            }
            console.log(resultado); 
            //Tarea desplegar los usuarios en la lista
        },
        error: function(err){
            console.log('Ocurrio un error');
            console.log(err);
        }
    });
}

function borrarUsuario(idUsuario)
{
    $.ajax({
        url: urlServidor + '/usuarios/' + idUsuario,
        method: 'DELETE',
        success: function(resultado){
            console.log(resultado);
            cargaUsuarios();
        },
        error: function(err){
            console.log(err);
            console.log('Ocurrio un error');
        }
    });
}