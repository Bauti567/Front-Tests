const container = document.getElementById('container')

container.onsubmit = (e)=>{
    e.preventDefault();
    let price = document.getElementById('price').value;
    price.parseInt();
    if (typeof price != "number" ) {
        console.log('No es un numero')
    } else {
        console.log('Si es un numero')
    }
    console.log(price);

}
