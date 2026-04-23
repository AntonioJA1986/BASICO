// 1. Crea un array que almacene cinco animales
let myArrayN = ["perro", "gato", "caballo", "vaca", "toro"]
console.log(myArrayN)

// 2. Añade dos más. Uno al principio y otro al final
myArrayN.push("mariposa") // agrega al final
myArrayN.unshift("cebra")// agrega al comienzo
console.log(myArrayN)


// 3. Elimina el que se encuentra en tercera posición
let myArrayN2 = ["perro", "gato", "caballo", "vaca", "toro"]
console.log(myArrayN2)
myArrayN2.splice(2,1) //2 → desde qué posición empezar (índice 2 = "caballo")
                    //1 → cuántos elementos eliminar
console.log(myArrayN2)

// 4. Crea un set que almacene cinco libros

let mySet2= new Set (["Algrebra", "geometria", "Historia", "Trigonometria", "fisica"])

console.log(mySet2)


// 5. Añade dos más. Uno de ellos repetido
mySet2.add("religion", "civica" , "Algrebra")// set permite agregar uno por uno los datos aca solo toma el primer valor [religion]
mySet2.add( "civica" )
mySet2.add( "Algrebra")
console.log(mySet2)


// 6. Elimina uno concreto a tu elección

mySet2.delete("religion")// elimina 
console.log(mySet2)

// 7. Crea un mapa que asocie el número del mes a su nombre
 let myMap2=new Map()
 myMap2 = new Map ([
    ["1", "Enero"],
    ["2", "Febrero"],
    ["3", "Marzo"],
    ["4", "Abril"],
    ["5", "Mayo"],
    ["6", "Junio"],
    ["7", "Julio"],
    ["8", "Agosto"],
    ["9", "Setiembre"],
    ["10", "Octubre"],
    ["11", "Noviembre"],
     ["12", "Diciembre"]
    ])
    console.log(myMap2)



// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log (myMap2.has("13"))// false
console.log (myMap2.has("12"))// true

// 9. Añade al mapa una clave con un array como que almacene los meses de verano

myMap2.set ("MES1", "Mayo")
myMap2.set ("MES2", "Junio")
myMap2.set ("MES3", "Julio")
  console.log(myMap2)



// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
// creando el array
let array5 = ["Gia","Tony","Daryl"]
console.log(array5)
// transformando array a set
let mySet3= new Set(array5)
console.log(mySet3)
//almacenando a un Map
let MyMap3= new Map(
[  ["personas", mySet3]

])
    console.log(MyMap3)

//11. Convertir todo a MAYÚSCULAS
let usuarios = ["ana", "luis", "ana", "pedro", "luis", "maria", "pedro"]
let mayuscula1=usuarios.map(user=>user.toUpperCase())
 console.log(mayuscula1)


