// El control Switch permite tomar un flujo de camino dentro de un 
// programa, permitiendo elegir entre 1,2,3 o más casos de uso

// Declaracion de un Switch

// Dentro de los parentesis del switch ponemos el caso
// Que queremos ejecutar
switch(2) {
    case 1:{
        console.log('Este es el caso 1');
        break;
    }
    case 2:{
        console.log('Estress')
        break;
    }
    case 3:{
        console.log('NO HAY ESTRES')
        break;
    }
    // El caso Default, se va a ejecutar siempre y cuando
    // Ninguno  haya funcionado
    default:{
        console.log('Caso por defecto');
        break;
    }
}

// En este caso este switch tiene 3 casos y un default que siempre lo tiene
let x = 1
switch(2) {
    case 1:{
        console.log('Este es el caso 1');
        break;
    }
    case 2:{
        console.log('Estress')
        break;
    }
    case 3:{
        console.log('NO HAY ESTRES')
        break;
    }
    // El caso Default, se va a ejecutar siempre y cuando
    // Ninguno  haya funcionado
    default:{
        console.log('Caso por defecto');
        break;
    }
}
