// Vamos a crear un todo list para poder agregar elementos a una lista

const todos = []; // Almacenar los todos


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
        const todoList = document.getElementById('list')
        const todosTemplate = todos.map(t => '<li>' + t + '</li>');
        todoList.innerHTML = todosTemplate.join('');
        
        console.log(todosTemplate)
    }

}