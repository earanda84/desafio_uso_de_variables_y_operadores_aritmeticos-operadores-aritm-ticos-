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

/* 3. Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y
que la transforme a grados Kelvin y Fahrenheit.
Se debe considerar la siguiente información respecto a la equivalencia de las
escalas de temperatura:
● 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos
es 0 °C + 273.15 = 273.15 K
● 0 Grados Celsius corresponden a 3 */

//Solicita grados celsius
var celsius = +prompt('Ingresa la temperatura en grados Celsius: ');

//proceso kelvin, fahranheit.
var kelvin = num1 + 273.15;

var fahrenheit = (num1 * 9 / 5) + 32;

//Muestar por pantalla
alert(`${celsius}C corresponden a ${kelvin}K y ${fahrenheit}F.`)

/*
4. Crear un programa que pida al usuario una cantidad de días y que muestre su
equivalente en Años, Semanas y Días.Por ejemplo, si el usuario ingresa 373, el
resultado debe ser 1 año, 1 semana y 1 día.
Se debe considerar lo siguiente: ●1 año tiene 365 días● 1 semana tiene 7 días
Se recomienda usar la función Math.floor para obtener la parte entera de un número
decimal. */

//Solicitar a usuario cantidad de días
var cantidad_de_dias = +prompt('Ingresa la cantidad de días: ');

var anios = Math.floor(cantidad_de_dias / 365);
var semanas = Math.floor((cantidad_de_dias % 365) / 7);
var dias = Math.floor((cantidad_de_dias % 365) % 7);

alert(`La cantidad de años son ${anios} años ${semanas} semanas y ${dias} día`);


/* 
5. Crear un programa que solicite al usuario 5 números y realice los cálculos que se
piden a continuación.●La suma de todos los números.●El promedio de los 5 números ingresados */

//Solicita ingresar 5 números
var num1 = +prompt('Ingrese el número uno: ');
var num2 = +prompt('Ingrese el número dos: ');
var num3 = +prompt('Ingrese el número tres: ');
var num4 = +prompt('Ingrese el número cuatro: ');
var num5 = +prompt('Ingrese el número cinco: ');

//Procesos
var suma = num1 + num2 + num3 + num4 + num5;

var promedio = suma / 5;


//Muestra por pantalla

alert(`La suma de los números es ${suma} y el promedio es ${promedio}.`);