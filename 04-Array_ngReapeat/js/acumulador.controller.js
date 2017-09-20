class AppController{

    $onInit (){
        this.aPensamientos=[];
    }

    aniadir () {
        this.aPensamientos.push(this.pensamiento);
        this.pensamiento='';
    }

    borrarLista () {
        this.aPensamientos.length=0;
    }

}

angular.module("appMain")
.controller("AppController", AppController)