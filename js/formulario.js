// ***************************************************
// Qué estamos haciendo aqui?

// 1- Leer el texto del input formulario del documento
// 2- Mostrarlo por pantalla
// 3- Agregar ese texto en un div que hay en el documento
// 4- Resetear el valor del formulario una vez escrito en el div
// 5- Se muestra como agregar datos en sesion y en local
// 6- Se comenta una función que se puede usar en el ejercicio de la calculadora para hacer la operacion mas rapido.
// ***************************************************



const getText = () => {
    // 1
    let texto = document.getElementById("info").value;
    
    // 2
    alert(texto);
    console.log(texto);
    
    // 3- Añade en el div del DOM ese texto que hemos introducido
    document.getElementById("newText").innerHTML = texto;
    
    // 4- Se ha intentado borrar el valor del imput una vez enviado (revisar, no funciona)
    texto.value(""); 


    //5- para añadir datos en sesion para que se guarden
    // Diferencia:
    // - localStorage: La información almacenada en no posee tiempo de expiración.
    // - sessionStorage: La información almacenada es eliminada al finalizar la sesion de la página
    // A tener en cuenta porque si se usa en un ordenador público otros usuarios podrian revisar esa informacion de otros usuarios y viceversa.
    sessionStorage.setItem("dato-en-sesion", texto);
    localStorage.setItem("dato-en-local", texto);
};

// 6- Fablando del proyecto de la calculadora
// Esto es una funcion que podemos utilizar para que nos calcule las suma y multiplicasciones sin problemas, pero cuidado esta funcion la bloquean los nuevos navegadores por tema privacidad. Hay que hacerlo de la otra manera.
let resultado = eval("1+9*8/5");
console.log(resultado);