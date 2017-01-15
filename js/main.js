$( document ).ready(function() {
   
  $.ajax({
    url: '/vimeos',
    contentType: 'application/json',
    success: function(response){
      console.log(response);
    }
  })

});