// Un callback es una funcion que se va a ejecutar
// al final de una funcion



// Esta es la primera funcion, que recibirá tres parametros

function Sumar(a,b, cb) {
    // El tercer argumento sera cb
    const res = a + b;
    cb(res);

}

function Result(resultado) {
    console.log('El resultado es:', resultado)
}

console.log(Sumar(2, 3, Result))
// Un Callback simplemente es una función que se entrega como parametro

//---------------- Fat arrow functions -------------
// Las funciones aparete de ejecutar codigo, tambien funcionan como Valores
// Un fat arrow function no es necesario declarar una funcion con la palabra "Function"
// Si tiene una sola linea no es necesario aplicar el Return

const fatArrowFunction = (a,b)=> a + b
    // A si se declara una funcion fat arrow function
    // Para que retorne, no hay que escribir los parentesis

const otraArrowFunction = (c,d) => {
    return c - d 
}


console.log(fatArrowFunction(2,2))
console.log(otraArrowFunction(5,3))

// --------------- Funciones Anonimas  -------------
// Las funciones anonimas, son funciones que no tienen ningun nombre
// la funcion anonima se usa solo para lalogica dentro de una app
// pero no es buena practica

