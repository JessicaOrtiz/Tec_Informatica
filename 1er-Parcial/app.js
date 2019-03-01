
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

/*var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
    var cors = require('cors');
    var querystring = require('querystring');
    const bodyParser = require("body-parser");
    var cookieParser = require('cookie-parser');
    const usuarioArch = require('fs');
    var archivo = "perfil.json";



    var db = {
      //Indicar BD o abrir conexion
      initDB: function () {
          var fs = require("fs");
          var contents = fs.readFileSync(archivo);
          this.usuario = JSON.parse(contents);
          console.log(this.usuario);
      },
      saveUsuario : function(){
        //console.log(this.usuario);
        usuarioArch.writeFileSync(archivo, JSON.stringify(this.usuario),
          function (error) {
              if (error) {
                  console.log('Hubo un error al escribir en el archivo')
                  console.log(error);
              }
          });
      }
    }

    app.route("/")
  .get( (req, res) => {
    db.initDB();
    res.json(db.usuario);
  });

  var app = express();

app.use(express.static(__dirname + '/'))
   .use(cors())
   .use(cookieParser());*/

$(function(){
  console.log("entre a la funcion");
  var token = '2117516145.e1bcbd5.1b8ef9aacdd443709adcd634e1f435dd',
    num_photos = 10,
    container2 = document.getElementById( 'userinfo' ),
    scrElement2 = document.createElement( 'script' );

  
    $('#ok').on('click', function(evento){
      evento.preventDefault();
      $.ajax({
        type: 'GET',
        url: 'https://api.instagram.com/v1/users/self/media/recent',
        data: {access_token: token, count: num_photos},
        success: function(d){
           console.log(d);
          for( x in d.data ){
            $('#lista').append('<li class="list-group-item"><img  class="img-fluid img-thumbnail" src=' + d.data[x].images.low_resolution.url + '></li>');
          }
        },
        error: function(data){
          console.log(data);
        }
      });
    });

    window.mishaProcessResult2 = function( response ) {
      container2.innerHTML = '<li class="media"><div><p><img class="mr-3" src="' + response.data.profile_picture + '"></p></div>'
        + '<div class="media-body"><h1>' + response.data.username + '</h1>'
        + '<p>' + response.data.counts.media + ' media ' + response.data.counts.followed_by + ' followers ' + response.data.counts.follows + ' follows</p>'
        + '<p><strong>' + response.data.full_name + '</strong> ' + response.data.bio + '<a href="' + response.data.website + '">' + response.data.website + '</a></p></div></li>';
    }
     
    scrElement2.setAttribute( 'src', 'https://api.instagram.com/v1/users/self?access_token=' + token + '&callback=mishaProcessResult2' );
    document.body.appendChild( scrElement2 );


   
   /* $('#info').on('click', function(evento){
      evento.preventDefault();
      $.ajax({
        type: 'GET',
        url: 'https://api.instagram.com/v1/users/self/?access_token=' + token,
        dataType: 'jsonp',
        data: { username: name, 
               // profile_picture: image_profile,
                bio: biog},
        success: function(data){
          console.log(data);
          for(x in data.data){
            console.log(data.data[x].name);
          }
        },
        error: function(data){
          console.log(data);
        }
      });
    });*/
});

//Info para sacar los datos del perfil
//https://rudrastyh.com/instagram/get-photos-and-profile-info-pure-javascript.html

//Obtener fotos
//https://rudrastyh.com/instagram/get-photos-with-javascript.html#user_id

//Generar token
//https://rudrastyh.com/tools/access-token?code=2d1a3949846443b1987440bd6fd64ca8