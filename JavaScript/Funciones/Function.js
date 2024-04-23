// Las funciones son secciones de codigo que me permiten
// Ejecutar una seccion de codigo para su reutilizacion

function iterar(arg) {
    for(let i = 0; i <= arg.length; i++){
        console.log(arg[i]);
    }
    
}


let Nombres = ['Juan', 'Maria','Pedro']

console.log(iterar(Nombres))


// Funciones por defecto de Java Script

function Suma(n1,n2) {
    return n1 + n2;
}

console.log(Suma(2,2))