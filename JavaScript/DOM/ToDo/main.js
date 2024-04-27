// Vamos a crear un todo list para poder agregar elementos a una lista

const todos = []; // Almacenar los todos
const arr = [1,2,3,4,5]

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
        console.log(todoText); // MOSTRANDO EL VALOR DEL INPUT
        console.log(todos)
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
                

                
            });
        })
        
    }
    
 
}