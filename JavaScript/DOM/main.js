// Para conectar el DOM con el script es necesario
// Hacer uso de la etiqueta script y referenciar donde se encuentra el 
// archivo del script

window.onload = ()=>{

}


alert('Mi primer practica con DOM')
console.log('Aprendiendo el DOM')

let parrafo = document.getElementById('text') // Obtener los elementor por su id
console.log(parrafo)
console.log(parrafo.innerHTML) // Imprime lo que contiene la etiqueta 

// Cuando se imprime la variable, muestra la etiqueta

parrafo.innerHTML = "Nuevo texto" // Editando el texto de la etiqueta

let lista = document.getElementById('list')
lista.innerHTML = '<li>Listado con inner</li>'

// Con innerHTML podemos agregar más estiquetas o reemplazar el DOM
