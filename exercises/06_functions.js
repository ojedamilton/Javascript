/* 
 Crear una función suma que reciba dos valores numéricos y retorne el resultado.
 Ejecutar la función y guardar el resultado en una variable,
 mostrando el valor de dicha variable en la consola del navegador.
*/

function suma1 (num1,num2){
    var resultado= num1+num2;
    return resultado;
}

var excSuma=suma1(4,6);
//console.log(excSuma);

/*
A la función suma anterior, agregarle una validación para controlar si alguno 
de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros 
tiene error y retornar el valor NaN como resultado. 
*/

function suma2 (num1,num2){
    if (isNaN(num1)|| isNaN(num2)) {
        alert ('alguno de los parametros no es un numero');
        return 'Nan';
    }else {
        var resultado= num1+num2;
        return resultado;  
    }
    
}

//var validationSuma=suma2(4,'r');
//console.log(validationSuma);

/* 
A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
*/
function CallBackEnteros(num1) {
    if (!Number.isInteger(num1)) {
     alert('el numero ingresado es decimal');
      var num1=Math.round(num1); 
       return num1;
    } 
}

 
function suma3 (num1,num2){

   // CallBackEnteros(num1,num2);

    if (isNaN(num1)|| isNaN(num2)) {
        alert ('alguno de los parametros no es un numero');
        return 'Nan';
    }
    
    var resultadoSuma= CallBackEnteros(num1) + CallBackEnteros(num2);
    return resultadoSuma;  
    
}

var validationSuma=suma3(4,5.4);
console.log(validationSuma);  