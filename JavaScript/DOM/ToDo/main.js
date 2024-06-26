// Vamos a crear un todo list para poder agregar elementos a una lista

const todos = []; // Almacenar los todos

//const todos = JSON.localStorage.getItem('todos') || []; 
// La funcion Json convierte los strings a codigo javaScript

const arr = [1,2,3,4,5]
// Los short circuits es cuando se llama una instruccion
// pero la instruccion no retorna nada

const render = ()=>{ // Creando la fincion render para crear porciones de codigo
    const todoList = document.getElementById('list') // TR
    const todosTemplate = todos.map(t => '<li>' + t + '</li>');
    todoList.innerHTML = todosTemplate.join('');
    console.log(todosTemplate)
    
    // Va a traer todos los elementos dentro de ese ID de derecha a izauierda
    const elementos = document.querySelectorAll('#todo-list li') // Trae todos los elementos dentro del HTML
    // Iteramos con ForEach
    elementos.forEach((elemento, i)=>{
        // Añadir evento escuchador al elemento
        elemento.addEventListener('click',()=>{
            // Mientras se va iterando vamos agregando un evento
            elemento.addEventListener('click', ()=>{
                elemento.parentNode.removeChild(elemento)
            })
            // La funcion paren node referencia al padre 
            console.log(elemento, i);
            todos.splice(i,1);
            console.log(todos, i);

            
        });
    })

}



window.onload = ()=>{
    // Obteniendo los valoes del DOM
    const todoForm = document.getElementById('todoForm')
    // Al momento de enviar el formularo
    todoForm.onsubmit = (e) =>{
        e.preventDefault(); // Prevenir que refresque la pagina
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText); // Agregar los elementos del arreglo
        render(); // Ejecuta el bloque superior   
    }
    
}

// Local Storage permite almacenar elementos dentro del explorador Web
// setItem, almacenar un elemento
// getItem traer el elemento almacenado
