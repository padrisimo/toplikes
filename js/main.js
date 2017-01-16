$( document ).ready(function() {

  $.ajax({
    url: '/vimeos',
    contentType: 'application/json',
    success: function(response){
      console.log(response.vimeos.data);

      var lista = $('#list');

      lista.html('');


      response.vimeos.data.forEach( function(vimeo) {

        var barsColors = "https://i.vimeocdn.com/portrait/";

        function userPicVal(){
          if(!vimeo.user.pictures){
              return barsColors;
            }else{
              return vimeo.user.pictures.sizes[2].link;
            }
        }

        //create the list
        lista.append('<li>'+
        '<a href="'+vimeo.link+'"><h2>'+vimeo.name+'</h2></a>'+
        '<a href="'+vimeo.link+'"><img src='+userPicVal()+'></a>'
        +'</li>')
      });
    }
  })

});
