/* Crear un array que contenga 5 palabras y recorrer dicho array utilizando 
un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
*/

var palabras = ['html','css','javascript','reactJS','nodeJS'];
 for (let i=0; i < palabras.length; i++) {
    alert (palabras[i]);
}  





/* Al array anterior convertir la primera letra de cada palabra en mayúscula
 y mostrar una alerta por cada palabra modificada. 
 */

 for (let i=0; i < palabras.length; i++) {
    alert (palabras[i].substring(0,1).toUpperCase() + palabras[i].substring(1,palabras[i].length));
} 




/* Crear una array vacío y con un bucle for de 10 repeticiones. 
Llenar el array con el número de la repetición, 
es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array,
desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
*/

var arrEmpty = [];

for (let i = 0; i < 10; i++) {
    arrEmpty.push(i);   
}
console.log(arrEmpty);