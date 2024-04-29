const container = document.getElementById('container')
let res = document.getElementById('result')

function Total() {
    
}

function IVA(price) { 
    if(isNaN(price)){
        console.log('No se puede hacer la oprecion de IVA')
        return NaN;
    }
    return price * 19 / 100
}

container.onsubmit = (e)=>{
    e.preventDefault();
    
    let price = parseInt(document.getElementById('price').value);
    if (isNaN(price)) {
        // isNaN hace referencia a NOT A NUMBER
        console.log('No es un numero')
        res.innerHTML = 'No es un número: '+ document.getElementById('price').value;

    } else {
        console.log('Si es un numero');
        let iva = IVA(price)
        if (!isNaN(iva)) {
            res.innerHTML = iva.toFixed(2);
        }
    }
    
    console.log(IVA(price))

}
