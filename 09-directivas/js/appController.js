class AppController{
    
    constructor ($log) {

    }

    $onInit () {
        this.autor= "Fco Javier Chaparro";
    }
}

angular.module("appModule")
.controller("AppController", AppController)