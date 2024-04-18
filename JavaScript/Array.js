// Arreglos en JavaScript
// Diferencias entre arreglos y listas

const arrayLleno = [1, 2, 4, "Hola", "mundo"] // Asi se define un erreglo
const arrVacio = []

// Un arreglo contiene datos de distintos tipos

console.log(arrayLleno, arrVacio)

function Array(array) {
    for (let index = 0; index < array.length; index++) {
          console.log(array[index])
        
    }
}

console.log(Array(arrayLleno));

// La funcion push() agrega elementos al arreglo

const variable = "La variable"
arrVacio.push(5)
arrVacio.push(variable)

console.log(arrVacio)
