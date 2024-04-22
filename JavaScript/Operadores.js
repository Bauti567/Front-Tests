function Suma(n1,n2){
    return n1 + n2;
}

function Resta(n1,n2){
    return n1 - n2;
}


function Multiplicacion(n1,n2){
    return n1 * n2;
}

function Division(n1,n2){
    return n1 / n2;
}


console.log(Suma(2 ,2),Resta(5,3),Multiplicacion(5,4),Division(5,2))

// ------------------ OPERADORES DE COMPARACIÓN ----------------------

// Los operadores de comparación permite crear comparaciones con varios tipos de datos

const resultado1 = 5 === 6 // Comparacion exacta, o igual estricto,

// En este caso evalua si el 5 es exactamente igual al 6
console.log(resultado1) // false por que no son exactamente iguales

const resultado2 = 5 == '5' // Comparacion de 5 de forma no tan esctricta
// NO NECESARIAMENTE SON IGUALES EN SU TIPO DE DATO
// LO EVALUA PERO NO EVALUA SU TIPO DE DATO
console.log(resultado2)

const resultado3 = 5 < 4 // Operador menor que

console.log(resultado3)

const resultado4 = 6 > 5 // Operador mayor que
console.log(resultado4)

const resultado5 = 5 != 6 // el operador del signo de admiracion indica que sea distinto al siguiente

console.log(resultado5)

// ---------------- Operadores logicos de condicion -----------------------

// or ||
// and &
// not !
// Estos operadores permiten condicionar las evaluaciones que se realizan dentro de los condicionales

const oR = true || false
console.log(oR)
// Una de las condiciones debe ser correcta

const and = true && true
console.log(and)
// las dos opciones deben ser correctas

const not = !true
// Le da vuelta al resultado, si es true pasa a ser false

console.log(not)