class AppController{
    
    $onInit (){ 

    this.aListaAutores=[
        {
            nombre:'Pepe',
            apellidos:'Garcia',
            generos:['terror', 'ficcion'],
            fechaNacimiento: new Date('01/01/1998'),
            pais:'España'
        },
        {
            nombre:'Antonio',
            apellidos:'Perez',
            generos:['historico', 'ficcion'],
            fechaNacimiento: new Date('01/01/1999'),
            pais:'EEUU'
        },
        {
            nombre:'Paco',
            apellidos:'Blasco',
            generos:['policiaco', 'ficcion'],
            fechaNacimiento: new Date('01/01/1985'),
            pais:'España'
        },
        {
            nombre:'Raul',
            apellidos:'Perez',
            generos:['policiaco', 'ficcion'],
            fechaNacimiento: new Date('01/01/2010'),
            pais:'EEUU'
        }        
    ];
    
    this.generos=[
        {
            idGenero:1,
            nombre:"policiaco"
        },
        {
            idGenero:2,
            nombre:"ficcion"
        },
        {
            idGenero:3,
            nombre:"historico"
        },
        {
            idGenero:4,
            nombre:"terror"
        }        
    ];
    
    this.mostrarAniadir=false;

    this.autorNuevo={            
    nombre:'',
    apellidos:'',
    generos:[],
    fechaNacimiento: null,
    pais:''};
    
    }


    aniadirAutor () {
        this.aListaAutores.push(this.autorNuevo);
        this.autorNuevo={            
            nombre:'',
            apellidos:'',
            generos:[],
            fechaNacimiento: null,
            pais:''};
            
            this.mostrarAniadir=false;    
    }

}

angular.module("appMain", [])
.controller("AppController", AppController)