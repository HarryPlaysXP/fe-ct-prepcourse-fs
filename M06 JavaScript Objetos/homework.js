/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:

   // OK CORREGI SEGUN VIDEO
   // recibe por parametro signifca que tengo qeu dejar un parametro como valor 
   // y no colocarle un valor, ya que trate poniendo una edad y nombre y no funcionaba
   let gato = { 
      nombre : nombre , 
      edad : edad ,
      meow : function () {
      return "Meow!"
      }
   }
   return gato
   
}

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   // PROGRAMA OK
   var usuario = {
      nombre : nombre ,
      email : email ,
      password : password
   }
   return usuario
}

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código: OK TUVE QUE REVISAR EL VIDEO PARA CORREGIR EL EJERCICIO
   objeto [propiedad] = null
   return objeto
}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:

   // OK TUVE QUE VER EL video. 
   // En el video verificaba si existia una propiedad dle objeto que se llamase "metodo" o no.
   
   // Agreo la veriicacion del video
   if (objeto.hasOwnProperty(metodo) && metodo.typeOf === 'function');
   
   objeto[metodo] () // Se usa braket notacion por que no conocemos elmetodo "metodo" 
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:

   // CODIGO OK
   // uso una funcion auxilar que tome el valor de la propiedad deseada
   var numeroFinal = objetoMisterioso.numeroMisterioso
   return (numeroFinal * 5)
}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:

   // CODIGO OK no se por que no me dejaba usar Dot-Notation
   delete objeto [propiedad] 
   return objeto
}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   // OK SEGUN VIDEO quize hacerlo con "hasOwnProperty" pero no tuve en cuenta que eso
   // aolo sirve para saber si tiene la propiedad.
   // Lo que se debia hacer era consultar el valor de la propiedad "email" y verificar sidaba "null" o "indefinido"

   if  (objetoUsuario.email != null || objetoUsuario.email != undefined){
      return true
      }
   else {return false}
   
}

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   // CODGIO OK
   
   if (objeto.hasOwnProperty(propiedad)){
      return true
   }
   else return false

}

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:

   // CODIGO OK
   // Se pone "["password"]" entre comillas por que sino se toma como propiedad el parametro "password" y no la propiedad del mismo nombre.
   // NO ES LO MISMO PORPIEDAD QUE PARAMETRO}

   if (objetoUsuario["password"] === password){ 
      return true
   }
   else return false
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:

   // CODIGO OK
   // Pense que tenia que usar Braket-Notacion pero lo resolvi utilizando DOt-Notation

   objetoUsuario.password = nuevaPassword
   return objetoUsuario
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   
   // CODIGO OK SEGUN VIDEO
   // Casi lo resuelvo pero no sabia que podia poner la porpiedad del objeto y pushearla directamente como en el video
   // sino que habia puesto para pusear el objeto completo, que esta mal, habia puesto "objetoUsuario.push (nuevoAmigo)"

   objetoUsuario.amigos.push(nuevoAmigo)
   return objetoUsuario
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:

   // PROGRAMA OK SEGUN VIDEO
   // no sabia que los arreglos podias contener objetos.
   // Se recorre cada elemento del array "objetoMuchosUsuarios" 
   // y se cambia la propiedad "esPremium" de cada objeto (usuario)

   objetoMuchosUsuarios.forEach((usuario) => {
      usuario.esPremium = true
   });
   return objetoMuchosUsuarios

}

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro (NOTA PROPIA: sera objeto??) "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:

   // CODIGO OK ME AYUDE CON EL VIDEO por que dice que "objetoUsuario" es un parametro 
   // pero en el video dicen que es un objeto en realidad

   var result = 0 // uso una funcion auxiliar para ir sumando los likes
   objetoUsuario.posts.forEach((post)=>{ // recorro el arreglo por cada elemento
      result += post.likes // sumo la cantidad de likes del objeto post a la variable auxiliar "result"
   });
   // basicamente estaba ordenado asi el arreglo "objetoUsuario > posts > post > likes"
   return result 

}

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:

   //TAMBIEN TUVE QUE VER EL VIDEO PARA RESOLVER ESTOS EJERCECISO ;( lpm la unica parte que hice parecida fue la de crear la propiedad "calcularPrecioDescuento"
   
   objetoProducto.calcularPrecioDescuento = function(){ //esta parte estaba bein la tube que corregir segun el video HAY QUE USAR "this." para referisrse almismo obejto
      // esta parte quize solucionarla agregando variables nuevas pero la solucion era mas sencilla, es la solucion del video
      var descuento = this.precio * this.porcentajeDeDescuento; // utiliza el metodo "this." ya que se refiere al mismo objeto "objetoProducto"
      return this.precio - descuento; // se retorna la resta del precio total y el valor del descuento
   }
   return objetoProducto // se retorna el objeto para obtener el valor final
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
