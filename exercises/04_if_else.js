/* Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), 
si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” 
y sino un alerta con el mensaje “Lower than 0,5”. [utilizar alert() ]*/

var numAleatorio = Math.random();
if (numAleatorio >= 0.5) {
    alert('Greater than 0,5')
}else{
    alert('Lower than 0,5')
}

/* Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Menor” si la edad es menor a 18
“Mayor” si la edad es mayor o igual a 18 Y menor que 65
“Jubilado” si la edad es mayor o igual que 65.
 */
var age = Math.floor(Math.random() * (0 - 100)) + 100;

if (age < 18) {
    alert('usted es menor de edad')
}else if(age >=18 && age < 65 ) {
    alert ('usted es mayor de edad')
}else{
    alert('usted es Jubilado')
}
