let myname= "Bienvenido"
let mensaje="Hola, "+ myname +"!"
console.log(mensaje)
console.log(typeof mensaje)
//longitud
console.log(mensaje.length)
//metodos comunes
console.log(mensaje.toUpperCase())//convierte a mayuscula
console.log(mensaje.toLowerCase())//convierte a minuscula
console.log(mensaje.indexOf("Antonio"))//busca el indice donde está la palabra Antonio=6
console.log(mensaje.includes("Antonio"))//compruebe si la palabra existe, true
console.log(mensaje.slice(0,8)) // imprime solo un rango de caracteres del 0 al 8 -- Hola, An 
console.log(mensaje.replace("Antonio", "Gabriel"))//FUNCION DE REMPLAZO busca la palabra antonio y remplaza por GABRIEL
//metodos comunes
console.log(mensaje[0])
console.log(mensaje[2])
console.log(mensaje[13])
//PLANTILLAS TEMPORALES
let b= `hola, 
este es un comentario`
let email= "antonio.juncoa64gmail.com"
console.log(b)
console.log(`Antonio, ${myname}. tu email es, ${email} `)