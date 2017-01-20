var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("/vimeos")
    .then(response => {
        response.data.vimeos.data.map(vimeo => {
            vimeo.avatar = "https://i.vimeocdn.com/portrait/"
                            && vimeo.user.pictures
                            && vimeo.user.pictures.sizes[2].link;

            //filter
            $scope.isOver10 = function(vimeo) {
              var boxa = document.getElementById("isbox").checked;
              $scope.end = 52;

             boxa ? tope = vimeo.user.metadata.connections.likes.total > 1000 : tope = vimeo.user.metadata.connections.likes.total > 0 ;
             return tope;
            };
            $scope.end = 12;

        })
        return response.data.vimeos.data;
    }).then(vimeos => {
        $scope.vimeos = vimeos;
        console.log(vimeos);
    }, () => console.log("Something went wrong with the call"));
});

