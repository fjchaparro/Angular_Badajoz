class AppCabeza {
    $onInit(){
        this.sTitulo = "Componentes en Angular 1.6"
    }
}

angular.module('appModule')
.component("appCabeza", {
    // require: {'parent' : 'MainController'},
    templateUrl: 'componentes/app-cabeza.template.html',
    controller: AppCabeza,    
})