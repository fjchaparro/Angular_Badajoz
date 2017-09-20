class AppMain {
    
    $onInit () {
        this.texto = "Texto desde papa";
        this.btn1 = "Enviar"
        this.btn2 = "Borrar"
    }

   botonEnviar() {
        alert ("Boton 1");
    }

   botonBorrar() {
       alert ("Boton 2");
    }
}

angular.module('appModule')
.component("appMain", {
    template: `
       <app-cabeza></app-cabeza>
        <article>
        <add-texto></add-texto>    
        <dos-botones btn1="$ctrl.btn1" btn1-clic="$ctrl.botonEnviar()"
                btn2="$ctrl.btn2" btn2-clic="$ctrl.botonBorrar()">
        </dos-botones>
        <p> Variable en el scope padre: <i>{{$ctrl.texto}} </i></p>
        </article>
        <app-pie></app-pie>
    `,
    controller: AppMain,    
})
