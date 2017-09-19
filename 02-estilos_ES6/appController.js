
// Creamos la clase AppController con un constructor y la funcion borrar. 
// Añadimos el método onInit que se ejecutará automáticamente siempre 
// después del constructor donde inicalizamos las variables

class AppController{

// Tambien podemos inyectar el $scope en el constructor    
//constructor($scope){
//    this.$scope = $scope;
//}

$onInit (){
    this.user = {
        name:'Pepe',
        apellidos:'Perez',
    };

    this.curso='AngularJS';
}

borrar () {
    this.user.name='';
    console.dir(this);
        
    }
}

angular.module("appMain")
.controller("AppController", AppController)