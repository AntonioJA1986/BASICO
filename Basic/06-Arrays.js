//array - almacena varios valores en una sola variable
let myarray= []
let myarray2= new Array()
console.log(myarray)
console.log(myarray2)

let myarray= [3]
let myarray2= new Array(3)
console.log(myarray)
console.log(myarray2)

let myarray= [1,2,3,4]
let myarray2= new Array(1,2,3,4)
console.log(myarray)
console.log(myarray2)

let myarray= ["Antonio","Gabriel","Junco",4]
let myarray2= new Array(1,2,3,4)
console.log(myarray)
console.log(myarray2)
// Añadir valores a los Array

let myarray2= new Array(3)
myarray2 [2]= "Gianelly"
myarray2 [1]= "Ximena"
myarray2 [0]= "Aguirre"
console.log(myarray2)

myarray= []
myarray [2]= "Daryl"
myarray [0]= "Junco"
myarray [1]= "Aguirre"

console.log(myarray)

// Métodos comunes

myarray= []
// Método Push y Pop

myarray.push("Carlos") // agrega
myarray.push("Junco")
myarray.push("Meza")
myarray.push(48)

console.log(myarray)
console.log(myarray.pop())
myarray.pop() // elimina el último de la lista 

myarray.pop()// como puso dos Pop elimina los dos ultimos

console.log(myarray)

// uso de Shift y unshift
console.log(myarray.shift())//elimina el primer elemento del array
myarray.unshift("Eva", "Calixto")// sirve para agregar elementos al principio del array
console.log(myarray)

//length
console.log(myarray.length)//cuanto mide mi array
//clear
myarray= [] //limpia mi array
console.log(myarray)
myarray= ["Eva", "Calixto", "Velasquez"]
 // Slice
 let variable1= myarray.slice(2,3) //comienza a contar desde [0]Eva, [1]Calixto [2] Velasquez
                                 // y solo toma el indice 1 el indice 2 no lo toma en cuenta
 console.log(variable1)
 //Splice
 myarray= ["Eva", "Calixto", "Velasquez","37"]
myarray.splice(1,2) // desde qué posición empezar (índice 1 = "Eva"), [2] cuántos elementos eliminar
 console.log(myarray)


