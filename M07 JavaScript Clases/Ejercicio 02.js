/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.

   // CODIGO OK PRACTICAMOS EXPRESION POR CLASE la mitad la hice sin ver la videoclase
   constructor (nombre , apellido , edad , domicilio){
      this.nombre = nombre
      this.apellido = apellido
      this. edad = edad
      this.domicilio = domicilio
   }
   detalle() { // para hacer esta parte tuve qeu ver el video ya que no sabia como poner exactamente esto, peor iba bien encaminado
      return {
         nombre : this.nombre,
         apellido : this.apellido,
         edad : this.edad,
         domicilio : this.domicilio
         }
      }
   }

function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:

   // codgio OK tuve que repasar la explicacion de las clases
   var nuevaInstancia = new Persona (nombre, apellido, edad, domicilio) 
   return nuevaInstancia

   // en la videoclase lo ahcen asi
   // return new Persona (nombre, apellido, edad, domicilio)
}

function agregarMetodo() {
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:

   // Ejercico OK, vi el vidoe para entender la consigna pero la resolucion fue mia
   Persona.prototype.datos = function (nombre, edad) {
      return  this.nombre + ", "+ this.edad + " años"
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
