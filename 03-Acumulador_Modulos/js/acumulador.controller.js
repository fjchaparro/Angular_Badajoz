class AppController{

    $onInit (){
        this.incremento=10;
        this.total=0;
    }

    sumar () {
        this.total=parseInt(this.total) + parseInt(this.incremento);
        console.dir(this);
    }

    restar () {
        this.total=parseInt(this.total) - parseInt(this.incremento);
        console.dir(this);
    }

}

angular.module("appMain")
.controller("AppController", AppController)