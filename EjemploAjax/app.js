$(function(){
    $('#form-consultar').on('submit',function(evento){
    evento.preventDefault();
    var num = ($('#nombres').val() > 4)?5:$('#nombres').val();
    $.get('https://uinames.com/api/?ext&',{amount: num, region: $('#region').val(), gender: $('input[name=gender]:checked','#radio').val()},function(respuesta){
          $('table').html('');
            console.log(respuesta);
            var usr = '<tr></tr>';
              for(var j=0; j < num; j++)
              {
                $('table').append(usr);
                $('tr:last').append('<td>'+ respuesta[j].name + '</td>');
                $('td:last').after('<td>' + respuesta[j].surname + '</td>');
                $('td:last').after('<td>' + respuesta[j].gender +'</td>');
                $('td:last').after('<td>' + respuesta[j].age +'</td>');
                $('td:last').after('<td>' + respuesta[j].email +'</td>');
                $('td:last').after('<td>' + '<img src="'+ respuesta[j].photo +'">' + '</td>');
              }
    });
  });
  });
  