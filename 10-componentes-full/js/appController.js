class AppController{
    
    constructor ($log) {

    }

    $onInit () {
        
        this.texto= "Prueba addTexto";

        this.btn1="Send";
        this.btn2="Borrar";
    }
}

angular.module("appModule")
.controller("AppController", AppController)