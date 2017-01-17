var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("/vimeos")
    .then(function(response) {
        $scope.vimeos = response.data.vimeos.data;
        console.log($scope.vimeos);
    }, function(response) {
        //Secondari function handles error
        console.log("Something went wrong with the call");
    });

    //alternative avatar image
    $scope.barsColors = "https://i.vimeocdn.com/portrait/";
});

//legacy code

/*
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
        '<a href="'+vimeo.user.link+'"><img src='+userPicVal()+'></a>'
        +'</li>')
      });
    }
  })

});

*/
