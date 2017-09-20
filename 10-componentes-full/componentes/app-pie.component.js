class AppPie {
    $onInit(){
        this.sAutor = "Fco Javier Chaparro"
    }
}

angular.module('appModule')
.component("appPie", {
    // require: {'parent' : 'MainController'},
    templateUrl: 'componentes/app-pie.template.html',
    controller: AppPie,    
})