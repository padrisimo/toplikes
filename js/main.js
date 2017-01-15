$( document ).ready(function() {
   
  $.ajax({
    url: '/vimeos',
    contentType: 'application/json',
    success: function(response){
      console.log(response.vimeos.data);

      var lista = $('#list');

      lista.html('');


      response.vimeos.data.forEach( function(vimeo) {
        lista.append('<li>'+vimeo.name+'</li>')
      });
    }
  })

});