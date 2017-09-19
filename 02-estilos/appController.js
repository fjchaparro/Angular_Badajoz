
// En lugar de utilizar el $scope usamos la 
// definicion clasica de constructor de clase, 
// y además en la vista hemos definido el ng-controller como 'as vm'
angular.module("appMain")
.controller("AppController", AppController)

function AppController(){

    this.user = {
        name:'Pepe',
        apellidos:'Perez',
    };

    this.curso='AngularJS';

    this.borrar = function () {
        this.user.name='';
        console.dir(this);
        
    }
}
