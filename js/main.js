var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("/vimeos")
    .then(response => {
        response.data.vimeos.data.map(vimeo => {
            vimeo.avatar = "https://i.vimeocdn.com/portrait/"
                            && vimeo.user.pictures
                            && vimeo.user.pictures.sizes[2].link;
        })
        return response.data.vimeos.data;
    }).then(vimeos => {
        $scope.vimeos = vimeos;
    }, () => console.log("Something went wrong with the call"));
});
