/*
  Refuerza tus conocimientos en condicionales imprimiendo si un usuario es mayor o menor de edad,
  después que de acuerdo a la acción ingresada "crear, colocar, actualizar y borrar"
  se imprima que acción se realizará y por ultimo, si un número es par o impar. 🤓
*/
const edad = 18,
  accion = "crear",
  numero = 3;
let resultado = '';

if (edad >= 18) {
console.log("Eres mayor de edad");
}

switch (accion) {
case "crear":
console.log(`La acción es ${accion}`);
break;
case "colocar":
console.log(`La acción es ${accion}`);
break;
case "actualizar":
console.log(`La acción es ${accion}`);
break;
case "eliminar":
console.log(`La acción es ${accion}`);
break;
default:
console.log("No estás haciendo nada");
}

resultado = numero % 2 === 0 ? "par" : "impar";
console.log('El número es', resultado);