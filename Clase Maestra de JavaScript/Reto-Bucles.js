/*
  Refuerza tus conocimientos en bucles utilizando el bucle adecuado para cada caso:
    1. Imprime los números del 1 al 5
    2. Recorre una lista de colores
    3. Recorre las propiedades de un objeto persona
    4. Encuentra el número más cercano al cuadrado de 100
    5. Imprime los números pares hasta el 10, imprimiendo al menos uno.
 */
const colores = ['rojo', 'verde', 'azul', 'amarillo'];
const persona = { nombre: 'María', edad: 27, profesion: 'diseñadora' };
let num = 100;
let i = 0;

for(let i = 1; i <= 5; i++) {
  console.log(i);
}

for(let i of colores) {
  console.log(i);
}

for(let i in persona) {
  console.log(i + ":", persona[i]);
}

while (i * i <= num) {
  i++;
}
i--;
console.log("El número más cercano a 100 cuyo cuadrado es menor o igual a 100 es: " + i);

i = 1;
do {
  if(i % 2 === 0) {
    console.log(i);
  }
  i++;
}while(i <=10);