/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() {
   // Crea una Clase de ES6 o una función constructora llamada "Usuario".
   // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
   // El valor de cada propiedad la recibirá por parámetro.
   // Además, esta clase debe tener un método llamado "saludar".
   // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
   // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
   // Retornar la clase.
   // Tu código:

// SE USA EXPRESION POR CLASE PERO SE PDORIA USAR EL METODO VIEJO PONIENDO 
// function Usuario (usuario , nombre,email , password) {
//    this.usuario = usuario
//    this.nombre = nombre
//    this.email = email
//    this.password = password
   // function saludar (){
   //       return "Hola, mi nombre es " + this.nombre 
   //       // tambien se puede poenr "Hola, mi nombre es ${this.nombre}"
   //       // tuve el error que en la parte del strig  no habia puesto el espacio al final por eso daba error
   //    }
// }
   // CODIGO OK la saque casi a la primera
   class Usuario {
      constructor (usuario , nombre , email , password) {
         this.usuario = usuario
         this.nombre = nombre
         this.email = email
         this.password = password
      }
      saludar (){
         return "Hola, mi nombre es " + this.nombre 
         // tambien se puede poenr "Hola, mi nombre es ${this.nombre}"
         // tuve el error que en la parte del strig  no habia puesto el espacio al final por eso daba error
      }
   }
   return Usuario
}

function agregarMetodoPrototype(Usuario) {
   // Agrega un método al prototipo de "Usuario".
   // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
   // Tu código:
   // CODIGO OK vi el video porque no encontraba el erro

   Usuario.prototype.saludar = function (){ // me habia faltado poner que el prototype era igual a la function
         return "Hello World!"
   }
}

function agregarStringInvertida() {
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".
   // tuve que ver el video para hacerlo
   String.prototype.reverse = function () {
      return this.split("").reverse().join("") // habia puesto (" ") y tenia que ser sin espacio
// se usan metodos de JavaScript "split", "reverse" y "join" ya que se combierte al String en array y se da vuelta sus caracteres   
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
};
