let nameUsr = document.getElementById('name');
let form = document.getElementById('container');
let PrintName = document.getElementById('result');

form.onsubmit = (e) =>{
    e.preventDefault();

    console.log(nameUsr.value);
    PrintName.innerHTML = nameUsr.value
}
