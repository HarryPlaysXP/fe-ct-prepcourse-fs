/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código: OK
   return array [0]
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código: OK
   return array [array.length - 1] // se usa la funcion o metodo "length" la cual cuenta la cantidad de los array. Se pone "-1" por que la cuenta de elementos empieza en 0
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código: OK
   return array.length
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:  OK
   return array.map ((num) => { // Trate de usar el metodo".forEach" pero ese solo sirve para SOLO ver elementos y NO los elementos del mismo por eso se usa ".map"
      return num + 1
   })
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:  OK 
   array.push(elemento)   // uso el metodo ".push" que agrega un elemento dado al final del arreglo
   return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:   OK
   array.unshift(elemento)   // uso el metodo ".unshift" que agrega un elemento dado al inicio del arreglo
   return array
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:    OK
   return palabras.join(' '); //uso el metodo ".join" el cual junta strings de los arreglos
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:    OK
   return array.includes(elemento)
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:   OK SEGUN VIDEO CLASE
   // busque un metodo similar a ".join"(concatena textos (strings) pero NO suma) y no encontre, encontre en google la misma resolucion que esta.
   // lo que se hace aca es, por cada iteracion, se suma el valor del elemento de cada array a la variable "result" dando asi el total de la suma 
   // de los elementos del "arrayOfNums"
   var result = 0;   
   for (let i = 0 ; i < arrayOfNums.length ; i ++ ) {
      result += arrayOfNums [i]
      }
      return result
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:   OK
   // Se hace lo mismo que el caso anterior, peor se agrega una variable mas para realizar el calculo del promedio, 
   // el calculo del promedio se basa en dividir la suma de la variable "notas" y dividirla por la cantidad de notas, la cual es igual 
   // a la longitud del arreglo "resultadosTest"
   var notas = 0
   var promedioResultadosTest = 0
   for ( let i = 0 ; i < resultadosTest.length ; i++ ) {
      notas += resultadosTest [i] ;
      promedioResultadosTest = notas / resultadosTest.length ;
   }
   return promedioResultadosTest
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:   OK SEGUN VIDEO CLASE
   return Math.max (...arrayOfNums) // los 3 puntos "..." se llama sprit operator que hace que mantenga todo el arreglo igual
   // Se utiliza el metodo "Math.max" para que busque dentro del array el numero mas grande
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   // anotacion personal: segun la video clase "arguments" seria el arreglo que tenemos que recorrer
   
   // =======PROGRAMA OK======= (me ayude copn la clase por que no entenid mucho el ejercico)
      let producto = 1
   
   if (arguments.length === 0){ // se satisface la condicion de que si no pasan argumentos retornar 0
      return 0
      }
   else if (arguments.length === 1) { // se satisfase la segunda condicion de que si se salta un argumento (el largo del argumento es 1) se retorna ese argumento
      return arguments[0]
      }
   else {
      for (let i = 0; i < arguments.length; i ++) { // se multiplica cada elemento
         producto *= arguments[i]
         } 
      return producto }  
   }

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
// CODIGO OK
let contador = 0
for (let i = 0 ; i < array.length ; i++ ) {
   if (array [ i ] > 18){
      contador ++
   }}
return contador
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
// ------ CODIGHO OK --------
// 1 = Domingo, 2 = Lunes, 3 = Martes, 4 = Miercoles, 5 = Jueves, 6 = Viernes, 7 = Sabado 
if (numeroDeDia === 1 || numeroDeDia === 7)
{
   return "Es fin de semana"
   return "Domingo"
}
else if (numeroDeDia === 7) 
{
   return "Es fin de semana"
   return "Sabado"
}
else 
{
   return "Es dia laboral"
}
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
// codgio segun video clase OK
var numeros = num.toString() // utilizo el metodo "toString" para convertir un numero en string

if (numeros.charAt(0) === "9" ){ // el metodo "charAt" revisa el caracter en la posicion entre parentesis () 
   return true 
}
else {
   return false
}

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   // Programa OK corregi segun obvervacion de la clase pero resolucion propio
   for (let i = 0; i < array.length; i++) {
      if (array[1] === array[i]) { // TUVE QUE CORREGIR vi el video clase por que me daba error y era por que tenia "array[0]" en vez de "array[1]"
         return true
      }
      else return false
   } 
}


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   // OK SEGUN VIDEO NO PODIA SACAR EL EJERCICO
   
   var meses = []

   for (let i = 0; i < array.length; i++) {

   // primero se busca si el array cuenta con los meses que se quiere
         if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre" ){

         meses.push(array[i])
      }
   }
   // luego se corrobora que el nuevo arreglo tenga los 3 meses diferente y no repetido alguno de ellos
   if (meses.includes("Enero") && meses.includes("Marzo") && meses.includes("Noviembre") ) {
      return meses      
   }
   // en caso de no encontrar los 3 meses en el arreglo se retorna la frase de error
   else {return "No se encontraron los meses pedidos"}

}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   // OK SEGUN VIDEO CLASE
   // no sabia como sacarlo
   var tabla6 = []
   for (let i = 0 ; i <= 10 ; i++) {
      tabla6.push ( 6 * i)
   }
   return tabla6
     
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   //    OK, PERO REVISE CON VIDEO
   var numeros = []
   for (var i = 0; i < array.length; i++) {
       if (array[i] > 100){
         numeros.push(array[i])
      } 
   }
   return numeros
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   //OK MI RAZONAMIENTO IBA BIEN PEOR LA EJECUICION ESTABA MAL
   var nuevoarreglo = []
   for (var i = 1; i <= 10; i++) { // Se empieza por la variable de iteracion en 1 no se por que ;0
      num += 2 
      nuevoarreglo.push (num)
   
      if (i === num) {
      return "Se interrumpió la ejecución"
      }
   }
   return nuevoarreglo
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:

   // OK USE EL PROGRAMA ANTERIOR MAS LO QUE ME BASE EN LO QUE VI EN EL VIDEO
   
   var nuevoarreglo = []
   for (var i = 1; i <= 10; i++) { // Se empieza por la variable de iteracion en 1 no se por que ;0
      if (i === 5) {
         continue;
      }
      num += 2;
      nuevoarreglo.push(num);
   }
   return nuevoarreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
