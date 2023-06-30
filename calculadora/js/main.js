document.getElementsByTagName("h2")[0].innerHTML = "0";

// Funciones que permite:
// - Permite seguir operando con el resultado anterior
// - Permite que el primer número sea negativo
// - Sigue funcionando si presionamos algun operador antes que un numero

// VARIABLES
let valorIntroducido1 = "";
let valorIntroducido2 = "";
let operadorActivo = false;
let operador = "";
let resultado = "";


// FUNCIONES
const añadir = (newValor) => {
    if(operadorActivo == false){
        valorIntroducido1 += newValor;
        document.getElementsByTagName("h2")[0].innerHTML = valorIntroducido1;
    }else if(operadorActivo == true){
        // ¿Como funciona?
        // 1- Si no existe un resultado anterior y se opera y la var1 está vacia, se agrega el nuevo dato en la var1. 
        // 2- Si no existe un resultado anterior y se opera y la var1 está ocupada, se agrega en la variable 2
        // 3- Si existe un resultado anterior y se opera, se agrega el nuevo dato en la var2 para operarlo con el resultado en el igual().
        if(resultado == ""){
            if(valorIntroducido1 == ""){ // 1
                // Si se opera con la var1 vacia y el operador es "-" se agrega como valor negativo
                if(operador == "-"){
                    valorIntroducido1 += "-";
                }
                valorIntroducido1 += newValor;
                document.getElementsByTagName("h2")[0].innerHTML = valorIntroducido1;
                operadorActivo = false; // se desactiva para seguir añadiendo datos desde el otro if de arriba
            }else{ // 2
                valorIntroducido2 += newValor;
                document.getElementsByTagName("h2")[0].innerHTML = valorIntroducido2;
            }
        }else{ // 3
            valorIntroducido2 += newValor;
            document.getElementsByTagName("h2")[0].innerHTML = valorIntroducido2;
        }
    }
};

const añadirOp = (newOperador) => {
    operador = newOperador;
    operadorActivo = true;
};

const igual = () => {
    if (operadorActivo == true){
        // Esto es para seguir operando con el resultado
        if(resultado != ""){
            if(valorIntroducido1 == ""){
                valorIntroducido1 = resultado;
            }
        }

        if (valorIntroducido1 != 0){
            resultado = operacion(valorIntroducido1, valorIntroducido2, operador);
            document.getElementsByTagName("h2")[0].innerHTML = resultado; // resultado
    
            valorIntroducido1 = "";
            valorIntroducido2 = "";
            operadorActivo = false;
        }
    }
};

const operacion = (new1, new2, newOp) => {
    switch (newOp) {
        case '+':
            return parseFloat(new1)+parseFloat(new2);
        case '-':
            return parseFloat(new1)-parseFloat(new2);
        case '*':
            return parseFloat(new1)*parseFloat(new2);
        default:
            break;
    }
};

const borrar = () => {
    valorIntroducido1 = "";
    valorIntroducido2 = "";
    resultado = "";
    operadorActivo = false;
    document.getElementsByTagName("h2")[0].innerHTML = "0";
};