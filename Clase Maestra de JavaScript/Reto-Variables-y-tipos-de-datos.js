const nombre = 'Juan';
const holaMundo = '¡Hola Mundo!';
const array = [1, 2, 3, 4, 5];
const texto = 'La lluvia en Sevilla es una maravilla';
const resultado = texto.match(/lluvia/);
const patron = 'lluvia';

console.log( holaMundo + 'Soy ' + nombre);
console.log("Mi nombre en mayúsculas es:" + nombre.toUpperCase());
console.log("Mi nombre en minúsculas es:" + nombre.toLowerCase());
console.log("El mensaje de '" + holaMundo + "' tiene " + holaMundo.length + " caracteres");
console.log("El tercer número del array con los valores " + array + " es el " + array[2]);
const siguienteNumero = array.push([array.length - 1] + 1);
console.log("Se añade el número que sigue en orden al final del arreglo y es: " + siguienteNumero);
console.log(`Se encontró el patrón '${patron}' en el texto '` + texto + "', por lo que el resultado es: " + resultado);