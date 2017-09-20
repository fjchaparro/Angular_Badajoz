class AddTexto {

    constructor ($scope) {

        this.$scope = $scope;
    }

    $onInit(){
        //this.texto = "hola";
        console.info("Componente AddTexto");
        console.dir(this);
        this.texto = this.parent.texto;
    }
}

angular.module('appModule')
.component("addTexto", {
    require: {parent : '^AppController'},
    templateUrl: 'componentes/addTexto.template.html',
    controller: AddTexto
})
