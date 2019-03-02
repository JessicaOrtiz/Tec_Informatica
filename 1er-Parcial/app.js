
/*var clientid = 'e1bcbd51759b4068b116758051d8b9d6',
       userid = 2117516145,
       num_photos = 6;
 
$.ajax({
  url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
  dataType: 'jsonp',
  type: 'GET',
  data: {client_id: clientid, count: num_photos},
  success: function(data){
     console.log(data);
    for( x in data.data ){
      $('#galeria-instagram').append('<li><img src="'+data.data[x].images.thumbnail.url+'"></li>');
    }
  },
  error: function(data){
    console.log(data);
  }
});*/

//const archivos = require('fs');
$(function(){
  console.log("entre a la funcion");
  var token = '2117516145.e1bcbd5.1b8ef9aacdd443709adcd634e1f435dd',
    num_photos = 10,
    container2 = document.getElementById( 'userinfo' ),
    scrElement2 = document.createElement( 'script' );
    
    var db = {
      //Indicar BD o abrir conexion
      initDB: function () {
          var fs = require("fs");
          var contents = fs.readFileSync("./perfil.json");
          this.perfil = JSON.parse(contents);
    },
    saveAlumnos : function(){
      archivos.writeFileSync('perfil.json', JSON.stringify(this.perfil),
        function (error) {
            if (error) {
                console.log('Hubo un error al escribir en el archivo')
                console.log(error);
            }
        });
      }
    }

    $('#ok').on('click', function(evento){
      evento.preventDefault();
      $.ajax({
        type: 'GET',
        url: 'https://api.instagram.com/v1/users/self/media/recent',
        data: {access_token: token, count: num_photos},
        success: function(d){
           console.log(d);
          for( x in d.data ){
            $('#lista').append('<li class="list-group-item"><img  class="img-fluid " style="width:50px;height:50px;" src=' + d.data[x].images.low_resolution.url + '></li>');
          }
        },
        error: function(data){
          console.log(data);
        }
      });
    });

    window.mishaProcessResult2 = function( response ) {

      var perfil = { };
      container2.innerHTML = '<li class="media"><div><p><img class="mr-3" src="' + response.data.profile_picture + '"></p></div>'
        + '<div class="media-body"><h1 id="username">' + response.data.username + '</h1>'
        + '<p>' + response.data.counts.media + ' media ' + response.data.counts.followed_by + ' followers ' + response.data.counts.follows + ' follows</p>'
        + '<p><strong>' + response.data.full_name + '</strong> ' + response.data.bio + '<a href="' + response.data.website + '">' + response.data.website + '</a></p></div></li>';
      
       /* perfil.username = $('#username').val();
        console.log("1");
        console.log(perfil.username);
        console.log("2");*/
    }
     
    scrElement2.setAttribute( 'src', 'https://api.instagram.com/v1/users/self?access_token=' + token + '&callback=mishaProcessResult2' );
    document.body.appendChild( scrElement2 );
    
    $('#perfil').on('click', function(evento){
      evento.preventDefault();

     // var perfil = { };
      //perfil.username = $('#username').val();
     // sendPOSTRequest();

     // db.saveAlumnos();
      console.log("Hola");
    });

    function sendPOSTRequest(body_object){
      //Llamada post al backend usando jquery.
      $.post("http://127.0.0.1:5500/index.html", body_object , 
      function(){
          alert("Alumno guardado.");
          //Actualizamos la lista html para ver los cambios.
        //  getAlumnos();
      });
    }
});

//Info para sacar los datos del perfil
//https://rudrastyh.com/instagram/get-photos-and-profile-info-pure-javascript.html

//Obtener fotos
//https://rudrastyh.com/instagram/get-photos-with-javascript.html#user_id

//Generar token
//https://rudrastyh.com/tools/access-token?code=2d1a3949846443b1987440bd6fd64ca8