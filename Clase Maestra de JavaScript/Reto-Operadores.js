const diez = 10,
cinco = 5,
uno = 1,
dos = 2,
textoUno = '1',
textoDos = '2',
objetoUno = { uno: 1 },
objetoDos = { uno: 1 },
tres = 3;

console.log(`¿El número ${diez} es mayor que el número ${cinco}?`, diez > cinco);
console.log(`¿El número ${diez} es menor que el número ${cinco}?`, diez < cinco);
console.log(`¿El número ${uno} es igual al número ${dos}?`, uno === dos);
console.log(`¿El texto ${uno} es igual al texto ${textoDos}?`, textoUno === textoDos);
console.log('¿Los objetos son iguales?', objetoUno === objetoDos);
console.log('AND lógico: ', true && false);
console.log('OR lógico: ', true || false);
console.log(`La suma de ${diez} + ${tres}: ` , diez + tres);
console.log(`La resta de ${diez} - ${tres}: ` , diez - tres);
console.log(`La multiplicación de ${diez} * ${tres}: `, diez * tres);
console.log(`La división de ${diez} / ${tres}: `, diez / tres);
console.log(`${diez} módulo de ${tres}: `, diez % tres);