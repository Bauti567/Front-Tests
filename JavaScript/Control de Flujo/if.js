// El condicional if me permite evaluar en caso de que cambie
// Alguna de las secciones dentro del codigo

// Escribir un programa que adivine si es mayor o no de edad


// Programa que calcula si es mayor de edad
function Mayor(edad) {
    if (edad >= 18){
        console.log('Damn youre 18', edad)
    } else{
        console.log('You cand your age is', edad)
    }
}

// Programa que revisa que la contraseña sea conrrecta
let contraseña = 12345;
function Contraseña(contraseña) {
    if (contraseña === 12345 ) {
        console.log('La contraseña es correcta')
    } else{
        console.log('La contraseña es incorrecta')
    }
}

// Funcion que divide dos numeros
function Division(n1,n2) {
    res = n1/n2
    if (n1 === 0 || n2 === 0) {
        console.log('No se puede divir el numero')
    }

    return res;
}

// Funcion que retorna si un numero es Par o no
function esPar(n1) {
    // Va a dividir el numero hasta que sae 0
    return n1 % 2 === 0;
}

console.log(Contraseña(123))
console.log(Division(10,2))
console.log(esPar(2))
// Escribir un programa que ingrese una contraseña y retorne si la contraseña es correcta

