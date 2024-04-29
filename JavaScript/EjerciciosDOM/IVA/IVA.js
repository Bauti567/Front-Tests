const container = document.getElementById('form');
let res = document.getElementById('result');
let totalSpan = document.getElementById('total');
let productSelect = document.getElementById('productSelect');
let quantityInput = document.getElementById('quantity');

function Total(iva, product) {
    return iva + product;
}

function IVA(price) {
    if (isNaN(price)) {
        console.log('No se puede hacer la operación de IVA');
        return NaN;
    }
    return price * 0.19; // IVA del 19%
}

container.onsubmit = (e) => {
    e.preventDefault();

    let productValue = parseFloat(productSelect.value);
    let quantity = parseInt(quantityInput.value);

    let price = productValue * quantity;

    if (isNaN(price)) {
        console.log('No es un número');
        res.innerHTML = 'No es un número: ' + productSelect.options[productSelect.selectedIndex].text;
        totalSpan.innerHTML = '';
    } else {
        console.log('Si es un número');
        let iva = IVA(price);
        if (!isNaN(iva)) {
            res.innerHTML = iva;
            totalSpan.innerHTML = (price + iva);
        }
    }
};
