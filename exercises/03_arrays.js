/* 
Dado el siguiente array:
["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
mostrar por consola los meses 5 y 11. 
*/
var meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('el mes 5 es: '+meses[5]+' y el mes 11 es: '+meses[11] );

/* Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

// clono el array ya que sort es un  metodo mutable
var ordenamiento = [...meses].sort(); 
console.log('ordenados alfabeticamente : '+ordenamiento);

/*
  Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/
meses.unshift('sol');
meses.push('luna');

console.log('agrego el primer elemento '+meses[0]);
console.log('agrego el ultimo elemento '+ meses[meses.length-1]);
console.log('el nuevo array queda asi: '+meses);

/* Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

meses.shift();
meses.pop();

console.log('quito el primer y ultimo elemento agregados en el paso anterior : '+meses);

/* Invertir el orden del array (utilizar reverse) */

// clono el array ya que sort es un  metodo mutable
var ordenInverso=[...meses].reverse();

console.log('orden inverso: '+ordenInverso);

/* Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join). */

var stringMeses = [...meses].join('-');
console.log(stringMeses);

/* Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice)*/

var mayoNoviembre = [...meses].slice(4,11);
console.log('meses entre mayo & Noviembre '+mayoNoviembre);