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


/*var token =  '' ,  // aprende cómo obtenerlo debajo del 
    id_de_usuario =  2117516145 ,  // ID de usuario : obténlo en el código fuente de tu perfil de Instagram o mira el siguiente ejemplo :) 
    num_photos =  4 ;  // cuantas fotos quieres conseguir*/
 
/*$.ajax ( { 
	url :  'https://api.instagram.com/v1/users/'  + id_de_usuario +  '/media/reciente' ,  // o / usuarios / auto / media / Sandbox reciente para 
	tipoDatos :  'jsonp' , 
	escriba :  'GET' , 
	datos :  { access_token : token , count : num_photos } , 
	success :  function ( data ) { 
 		console. log ( data ) ;
		para ( x in datos. datos  ) { 
			$ ( 'ul' ) . append ( '<li> <img src = "' + data. data [ x ] . images . low_resolution . url + '"> </li>' ) ;  // data.data [x] .images.low_resolution.url - URL de la imagen, 306х306 
			// data.data [x] .images.thumbnail.url - URL de la imagen 150х150 
			// data.data [x] .images. standard_resolution.url - URL de la imagen 612х612 
			// data.data [x] .link - URL de publicación de Instagram 
		} 
	},
	error :  función ( data ) { 
   // console.log(data);  // enviar las notificaciones de error a la consola 
	} 
});*/