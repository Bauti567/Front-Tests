// Vamos a crear un todo list para poder agregar elementos a una lista

window.onload = ()=>{
    // Obteniendo los valoes del DOM
    const todoForm = document.getElementById('todoForm')
    // Al momento de enviar el formularo
    todoForm.onsubmit = (e) =>{
        e.preventDefault(); // Prevenir que refresque la pagina
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        console.log(todoText);
    }

}