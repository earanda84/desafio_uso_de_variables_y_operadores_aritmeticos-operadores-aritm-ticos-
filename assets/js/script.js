/* Desafío - Uso de variables y operadores aritméticos */

/* 2. Realizar operaciones con dos números.
Pedir al usuario que ingrese dos números diferentes y mayores a cero. Para ambos
números, calcular lo siguiente: */

//Solicita número 1
var num1 = +prompt('Ingresa el primero número mayor a cero: ');

//Solicita número 2
var num2 = +prompt('Ingresa el segundo número mayor a cero: ');

//Proceso

var suma = num1 + num2;

var resta = num1 - num2;

var multiplicacion = num1 * num2;

var division = num1 / num2;

var modulo = num1 % num2;

alert(`La Suma de los 2 número es ${suma}, la resta es ${resta}, la multiplicación es ${multiplicacion}, la división es ${division}, el módulo es ${modulo}.`);