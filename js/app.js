
const visor = document.getElementById("visor");

const pruebas = document.getElementById('pruebas');

// const agregaNumero = () => {
    
// }

function agregaNumero(numero){


    if(Number.isNaN(numero) == false){
        visor.append(numero);
    }
    console.log(visor.textContent);
}

let operacionPendiente = false;

function realizaOperacion(operacion){

    // Checamos si se pulsa el botón C, el cual limpiará la pantalla y borrará la operación pendiente
    if(operacion === 'C'){
        visor.innerText = "";
        operacionPendiente = false;
    }else{
        //Si no hay una operación pendiente, entonces checamos cual es la operación a realizar y agregamos su carácter al visor de la calculadora
        if(!operacionPendiente){
            visor.append(operacion);
            operacionPendiente = true;
        }
    }
           
}

function resultados(){
    //Guardamos en una variable todo el texto que tengamos en nuestro visor
    let numeros = visor.textContent;

    // Dependiendo de la operación que encontremos con include(), dividimos con split() el texto del visor en la parte donde encuentre el carácter de la operación a realizar
    if(numeros.includes('+')){
        let numerales = visor.textContent.split('+');
        let result = (parseInt(numerales[0]) + parseInt(numerales[1]));
        visor.innerText = result;
    }else if(numeros.includes('-')){
        let numerales = visor.textContent.split('-');
        let result = (parseInt(numerales[0]) - parseInt(numerales[1]));
        visor.innerText = result;
    }else if(numeros.includes('/')){
        let numerales = visor.textContent.split('/');
        let result = (parseInt(numerales[0]) / parseInt(numerales[1]));
        visor.innerText = result;
    }else if(numeros.includes('x')){
        let numerales = visor.textContent.split('x');
        let result = (parseInt(numerales[0]) * parseInt(numerales[1]));
        visor.innerText = result;

    }
}