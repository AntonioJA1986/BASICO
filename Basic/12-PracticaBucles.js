// 1. Crea un bucle que imprima los números del 1 al 20
//usando for
for (let i = 1; i <21; i++) {
    console.log(i) 
    
}   
//usando while
i=1
while (i<21) {
    console.log(i) 
    i++
}  

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma=0 //1
for (let i = 1; i<=100; i++) {
    suma+= i
    
}
 suma=console.log(`La suma es, ${suma}`)

 // usando while
 let sumatotal=0
 let j=1
 while (j<=100) {
    sumatotal+= j
    j++
 } suma=console.log(`La suma es, ${sumatotal}`)


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
//let par=0
for (let i = 1; i < 51; i++) {
    if (i%2==0) {
        console.log(i)
    }
}


// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

arrayj=["Pedro", "Magdalena", "Gianelly", "Daryl"]
for (let imprimeListado of arrayj) {
    console.log(imprimeListado)    
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto="Hola MUndo"
contador=0
for (let i = 0; i < texto.length; i++) {
    let letra=texto[i]

    if (letra==="a"||letra==="e"||letra==="i"||letra==="o"||letra==="u") {
       
        contador++
    }
}
console.log("Número de vacales",contador)

// convirtiendo a minuscula
let texto="HolA MUndo"
contador=0
for (let i = 0; i < texto.length; i++) {
    let letra=texto[i].toLowerCase()

    if ("aeiou".includes(letra)) {
               contador++
    }
}
console.log("Número de vacales",contador)
// USANDO FOR OF
let texto="HolA MUndo"
contador=0
for (let var1 of texto) {
       if ("aeiou".includes(var1.toLowerCase())) {
               contador++
    }
}
console.log("Número de vacales",contador)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
myArreglo=[2,3,4]
let producto1=1
for (let i = 0; i < myArreglo.length; i++) {
     producto1=producto1*myArreglo[i]
   } console.log(producto1)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let multiplica=0
numero=5
for (let i = 1; i <= 12; i++) {
    multiplica= numero*[i]   
    console.log( `${numero} x ${i} = ${multiplica}`) 
} 

// 8. Usa un bucle para invertir una cadena de texto

texto="HOLA"
invierte=""
for (let i = texto.length-1; i >=0; i--) {
    invierte+=texto[i] 
    
} console.log(invierte)

array= "Bienvenido al curso de JavaScript"
let arrayinvertido=array.split("").reverse().join("")
console.log(arrayinvertido)

texto2="Tony junco"
var1=""
for (let i = texto2.length-1; i>=0;i--) {
    var1+=texto2[i]
} console.log(var1)

texto3="daryl"
var2=texto3.split("").reverse().join("")
console.log(var2)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
arrayFibonacci=[0,1]
for(let i = 2; i <=10; i++) {
    arrayFibonacci[i] = arrayFibonacci[i-1]+arrayFibonacci[i-2];
    //console.log(arrayFibonacci)
    
}  console.log(arrayFibonacci)

let a=0
let b=1
resultado=""
for(let i=1;i<=10;i++)
{
resultado+= a+" "
let siguiente=a+b
a=b
b=siguiente
}
console.log(resultado)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
myArrayL=[5,7,10,12,15,2,20]
let nuevo=[]
for(let i=0; i<myArrayL.length;i++)
{
	if(myArrayL[i]>10)
	{
               
		nuevo.push(myArrayL[i]);
				
	}    
} 
console.log(myArrayL)

