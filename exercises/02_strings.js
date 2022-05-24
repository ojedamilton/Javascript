/* 
Crear una variable de tipo string con al menos 10 caracteres 
y generar un nuevo string con los primeros 5 caracteres guardando el resultado
en una nueva variable (utilizar substring).
*/

var strProg  = 'programacion';
var nuevoStr = strProg.substring(0,5);
console.log('el nuevo string de 5 caracteres es :'+nuevoStr);

/* 
Crear una variable de tipo string con al menos 10 caracteres 
y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula.
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/

var strJs   = 'javAsCripT';
var nuevoJs = strJs.substring(0,1).toUpperCase() + strJs.substring(1,10).toLowerCase();
console.log(nuevoJs);

/*
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y
guardarla en una variable (utilizar indexOf).
*/

var strWhite = 'visual studio';
var posicion = strWhite.indexOf(' ',0);
console.log('el espacio en blanco en '+'"'+strWhite+'"'+' esta en la posicion: '+posicion);
