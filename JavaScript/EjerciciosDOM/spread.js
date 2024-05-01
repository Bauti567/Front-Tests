// El spread operator esta representado por ...
// Lo que permite es no hacer referencia a todo lo que compone la variable

// Se usa para crear una copia de una variable

const a = { b : 1 } // Permite tener constantes 
// Que sean distintas entre si

const b = a 

console.log(b === a) // true
// Ambos son similares
// Ya que ambas son similares al momento de cambiar una sola se van a pasar esos cambios a la otra
// dado que son una constante

const c = { ...a }
// En esta linea de codigo le estoy diciento que cree un objeto simiar a A
console.log(a === c);
// False ya que son objetos distintos

/// ------------------- PROMISES ------------------------------

Promise.resolve(2) // Las promesas me permiten trabajar de
    .then(valor => valor + 1) // manera asincrona todo el código
    .them(valor => console.log(valor))

    // ESTE CODIGO ES PARA TRABAJAR CON API'S

// --- catch y Reject
// La funcion Reject me indica cuando una llamada a API ha sido rechazada

const promise = new Promise((resolve, reject) => {
    // Simular un error
    const error = new Error('Algo salió mal');
    reject(error);
});

// Por otro lado catch dentro de las promesas se utiliza para manejar el rechazo de una promesa
promise.catch((error) => {
    console.error('La promesa fue rechazada:', error);
});
