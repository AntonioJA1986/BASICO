// 1. Crea un array que almacene cinco animales
// primer metodo 

let lista = []
lista.push( "Loro","Jirafa","Araña","Pez","Águila") // forma correcta
console.log(lista)

//metodo 2
let lista2 = new Array( "Loro","Jirafa","Araña","Pez","Águila")// crear 5 espacios 
console.log(lista2)
// metodo 3
let lista3 = ["Loro","Jirafa","Araña","Pez","Águila"]
console.log(lista3)

// 2. Añade dos más. Uno al principio y otro al final
 lista3.push("Garrapata") // agrega al final
 console.log(lista3)
 lista3.unshift("Tiburon")// agrega al comienzo
 console.log(lista3)

// 3. Elimina el que se encuentra en tercera posición
let lista4 = ["Loro","Jirafa","Araña","Pez","Águila"]
console.log(lista4)

 lista4.splice(2,1)//2 → desde qué posición empezar (índice 2 = "caballo")
 console.log(lista4) //1 → cuántos elementos eliminar
let lista5= lista4.slice(1,2)
 console.log(lista5)

// 4. Crea un set que almacene cinco libros
let variableSet= new Set()
variableSet=new Set (["Algrebra","Historia","Geometría","Física","Cálculo"])
console.log(variableSet)

// 5. Añade dos más. Uno de ellos repetido
variableSet.add("Programación")
variableSet.add("Javascript")
console.log(variableSet)


// 6. Elimina uno concreto a tu elección

variableSet.delete("Algrebra")
console.log(variableSet)


// 7. Crea un mapa que asocie el número del mes a su nombre

let miMap= new Map()
miMap = new Map([
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
console.log(miMap) 

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log (miMap.has("13"))// false
console.log (miMap.has("5"))// true

console.log (miMap.get("5"))// get trae el valor 

// 9. Añade al mapa una clave con un array como que almacene los meses de verano
miMap.set("mes1","Verano")
console.log(miMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
// creando el array
let var1= ["Luis","Pepe","Martha"]
console.log(var1)

// transformando array a set
let conver1= new Set(var1)
console.log(conver1)

//almacenando a un Map

let nuevoMap= new Map([
["Nombres",var1]

])
console.log(nuevoMap)

//11. Convertir todo a MAYÚSCULAS
let A = ["juan","pedro","gia"]
let may= A.map(var1=>var1.toUpperCase())
console.log(may)


//
 let texto = "Hola, Bienvenido al Curso de Javascript"
 console.log(texto)
let count =0
for(let i=0; i<texto.length;i++)
  {
    if (texto[i]=== " " )
    {
      count ++
    }
   // return count;
  }
console.log(count)
//
let numero = "1,2,3,4,1,2,1,1,2,3,4,5,6,1"
console.log( numero)
let arreglo=numero.split(",")
console.log( arreglo)
//console.log(typeof numero)

let contara=0
for(let i=0;i<arreglo.length;i++)
{
    // console.log(i)
  if(arreglo[i]=== "2")
    {
      //console.log(i)
contara ++
    }
  
}

console.log(`La cantidad de caracteres buscado es: ${contara}`)

//

let li = [1,2,1,3,1,2];
let contador = {};
let maxNumero = null;
let maxCantidad = 0;
for (let i = 0; i < li.length; i++) {
  let valor = li[i];
  // Contar cuántas veces aparece cada número
  if (contador[valor]) {
    contador[valor]++;
  } else {
    contador[valor] = 1;
  }

  // Verificar si es el que más se repite
  if (contador[valor] > maxCantidad) {
    maxCantidad = contador[valor];
    maxNumero = valor;
  }
}

console.log("Frecuencias:", contador);
console.log("Número más repetido:", maxNumero);
console.log("Veces:", maxCantidad);