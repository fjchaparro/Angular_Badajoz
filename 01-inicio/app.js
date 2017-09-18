angular.module("appMain",[]);

angular.module("appMain")
.controller("AppController", ['$scope', function($scope){

    $scope.user = {
        name:'Pepe',
        apellidos:'Perez',
    };

    $scope.curso='AngularJS';

    $scope.borrar = function () {
        $scope.user.name='';
        console.dir($scope);
    }
}])
