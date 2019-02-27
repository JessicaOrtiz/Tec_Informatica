
const express =  require("express");

$(function(){
  var clientid = 'CLIENT ID',
       userid = 290023231,
       num_photos = 6;

  $('#OK').on('submit', function(evento){
    evento.preventDefault();
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
    })
  });
});