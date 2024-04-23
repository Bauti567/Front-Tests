// Ciclo While y do While

let num = 0

// Numeros de 1 a 10 
function Num10(n1) {
    if (n1 > 10) {
        console.log('No se puede imprimir un numero ')
    } else if (n1 < 10){
        while(n1 < 10){
            console.log(n1);
            n1++;
        }
    }
}

console.log(Num10(num))


// Tabla de los numeros 
let tabla = 5;
function Tabla(n2) {
    let res = 0; // Variable que inicializa en 0 e itera en si misma
    while (res <= 10) {
        // Se realiza la operacion
        console.log(n2,'*',res,'=',n2*res)
        res ++;

    }
}
console.log(Tabla(tabla))

// Programa que muestra los numeros de forma descendente
let des = 10;
function Desc(n3) {
    do{
        console.log(n3)
        n3--;
    }while(n3 >= 0) // Mientras que sea mayor o igual a 0
}

console.log(Desc(des))

let suma = 1;
function Suma(n4) {
    let contador = 0;
    do{
        
    } while(n4 >= 0) 
}