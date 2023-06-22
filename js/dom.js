// ***************************************************
// Qué estamos haciendo aqui?

// 1- Hemos creado un elemento en tiempo de ejecucion (h1) desde JS
// 2- Lectura de elementos del DOM
// 3- Lectura y modificacion del texto de los parrafos con una clase concreta
// 4- Métodos ambiguos de creacion de elementos HTML desde JS
// 5- Método de creación de elementos usando .appendChild()
// ***************************************************



// 1- Generar elementos en tiempo de ejecución
document.write("<h1>Hola mundo</h1>");

// 2- Lectura de elementos del DOM
// Esto lee la info de todos los parrafos (<p>) y lo guarda en el array "parrafos"
let parrafos = document.getElementsByTagName("p");

// Esto lee la info de los parrafos, selecciona el primero (como si fuese un array) y extrae el texto mediante el "innerHTML" y lo guarda en la variable "parrafos2"
let parrafos2 = document.getElementsByTagName("p")[0].innerHTML;

// Esto extrae el texto del elemento con esa ID
let parrafos3 = document.getElementById("id-1").innerHTML;



// 3- Esto extrae la info de todos los elementos con esa clase
let prCl = document.getElementsByClassName("clase-1");

console.log(prCl);
// ahora recorremos todos los parrafos con esa clase y modificamos el texto que tiene
for (let i = 0; i < prCl.length; i++) {
    prCl[i].innerHTML = "nuevo texto";
}


// 4- Metodos ambiguos para crear elementos HTML con JS (es lo mismo que el apartado 1)
let ol = "<ol><li>Ejemplo de creación de 'ol' con JS de forma ambigua</li><li>Ejemplo de creación de 'ol' con JS de forma ambigua</li><li>Ejemplo de creación de 'ol' con JS de forma ambigua</li></ol>";
document.write(ol);


// 5- Método de creación de elementos HTML usando .appendChild()
let NodoLi = document.createElement("li"); //Crea un nodo tipo LI
let nuevoTexto = document.createTextNode("Hola mundo"); //Crea un nodo de texto

NodoLi.appendChild(nuevoTexto); //Agrega el texto a <li>

document.getElementById("listaOrdenada").appendChild(NodoLi); //Agrega el elemento <li>