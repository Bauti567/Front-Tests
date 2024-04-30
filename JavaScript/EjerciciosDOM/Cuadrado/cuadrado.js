const form = document.getElementById('form');
let n1 = document.getElementById('n1'); 
let n2 = document.getElementById('n2');
let n3 = document.getElementById('n3');
let n4 = document.getElementById('n4');

function Perimetro(n1,n2,n3,n4) {
    return n1 + n2 + n3 + n4;
}

function Area(n1,n2,n3,n4) {
    return n1 * n2 * n3 * n4;
}


form.onsubmit = (e)=>{
    e.preventDefault();
    
    // Integrando todos los datos
    let l1 = parseInt(document.getElementById('n1').value);
    let l2 = parseInt(document.getElementById('n2').value);
    let l3 = parseInt(document.getElementById('n1').value);
    let l4 = parseInt(document.getElementById('n1').value);

    if (isNaN(l1,l2,l3,l4)){
        console.log('No se puede realizar la operacion')
    } else {
        console.log('SI SE VA A OPERAR');
        Cuadrado(l1,l2,l3,l4);

    }

}