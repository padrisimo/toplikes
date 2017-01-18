var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("/vimeos")
    .then(response => {
        response.data.vimeos.data.map(vimeo => {
            vimeo.avatar = "https://i.vimeocdn.com/portrait/";
        })
        return response.data.vimeos.data;
    }).then(vimeos => {
        $scope.vimeos = vimeos;
    }, () => console.log("Something went wrong with the call"));
});
