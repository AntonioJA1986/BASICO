// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una función que reciba dos números y devuelva su suma.
function suma(a,b) {
console.log(`La suma es,${a+b}`)
  //console.log(a+b)
} suma(5,2)
    
  

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos.
//usando for
let myArrayT=[1,9,7,0,8,10,50,14,17]
function mayor(myArrayT) {
    let numMayor = myArrayT[0]
    for (let i = 0; i < myArrayT.length; i++) {
        if (myArrayT[i]>numMayor) {
            numMayor=myArrayT[i]
        }
        
    }
    return numMayor    
}
console.log(mayor(myArrayT))

//usando while
let myArrayT1=[80,9,7,0,8,10,50,14,17]
function numMayor1( myArrayT1)
{
    i=0
    may=myArrayT1[0]
    while (i<myArrayT1.length) {

        if (may>myArrayT1[0]) {
            may=myArrayT1
        }
        i++      
    }
    return may
}
console.log(numMayor1(myArrayT1))

//usando foreach
let myArrayT2=[80,9,7,0,8,90,50,14,17]
function numMayor2(myArrayT2) {
    let mayor1=myArrayT2[0]
    myArrayT2.forEach(function(recorre){
        if (recorre>mayor1) {
             mayor1=recorre
        }        
    })
    return mayor1
}
console.log(numMayor2(myArrayT2))


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene.
//usando for
let letra="holae"
cont=0
function vocal(letra) {
 for (let i= 0; i < letra.length; i++) {
  if (letra[i]==="a"||letra[i]==="e"||letra[i]==="i"||letra[i]==="o"||letra[i]==="au") {
    cont++    
  }    
 }
 return cont
}      
console.log(vocal(letra))  

//usando while
let text4="Hola Mundo"

function cuentaVocales(text4) {
    let contador4=0
    let i=0
while (i<text4.length) {
    if (text4[i]==="a"||text4[i]==="e"||text4[i]==="i"||text4[i]==="o"||text4[i]==="u") {
        contador4++
    }
    i++
}
 return contador4
    
} console.log(cuentaVocales(text4))

//usando for of
let palabra="Antonio Gabriel"
let contador=0
function nameVocal(palabra) {
    for (const variable1 of palabra) {
        if ("aeiou".includes(variable1.toLowerCase())) {
            contador++
        }
    }
    return contador
}
console.log(nameVocal(palabra))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con los strings en mayúsculas.
//usando for 
let arrayNuevo= ["pedro","jose","gianelly","tony","daryl carel"]
let arrayMayuscula=[]
function retornaMayuscula(arrayNuevo) {
    for (let i = 0; i < arrayNuevo.length; i++) {
        arrayMayuscula.push(arrayNuevo[i].toUpperCase())        
    }
    return arrayMayuscula
}
console.log(retornaMayuscula(arrayNuevo))

let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]

function convertirAMayusculas(peliculas) {
    
     for (let i = 0; i < peliculas.length; i++) {        
        peliculas[i]  = peliculas[i].toUpperCase()   
     }

    return peliculas
}
console.log(convertirAMayusculas(peliculas))
//usando forEach
let muebles=["silla","mesa", "tocador","televisor"]
function name(muebles) {
    arrayMayus=[]
    muebles.forEach(function (guarda) {
        arrayMayus.push(guarda.toUpperCase())
    })
    return arrayMayus    
}
console.log(name(muebles))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario.
function esPrimo(numero){
if (numero<=1) {
    return false    
    }
    for (let i = 2; i<numero; i++){
      
        if (numero%i===0) {
            return false
        }     
    }
    return true
}
console.log(esPrimo(10))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.
//usando for
let a1=["Brazil","paris","alemania", "peru"]
let b1=["africa","alemania","paris", "brazil"]
function nameComun(a1,b1) {
    let c=[]
    for (let i = 0; i < a1.length; i++) {
       if (b1.includes(a1[i].toUpperCase())) {//para ignorar mayusculas
        c.push(a1[i])
       }        
    }
    return c    
} 
console.log(nameComun(a1,b1))

//usando forEach
let muebles1=["sarten","olla", "tocador","televisor"]
let muebles2=["silla","mesa", "tocador","televisor"]
function nameComunes( muebles1, muebles2) {
    let newmuebles3=[]
    muebles1.forEach(function(name)
    {
        if(muebles2.includes(name))
        {
             newmuebles3.push(name)
        }    
          
    })

   return newmuebles3       
}
console.log(nameComunes( muebles1, muebles2))
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares.
//usando for
let num1=[1,4]
function nameSuma(num1) {
    let sum=0
    for (let i = 0; i < num1.length; i++) {
       if (num1[i]%2==0) {
        sum+=num1[i]
       }
              
    }
    return sum    
}
console.log(nameSuma(num1))
//usando forEach
let num2=[6,3]
function nameSumpar(num2) {
    let varSuma=0
    num2.forEach(function(variable1)
    {
        if (variable1%2==0) {
           varSuma+= variable1
        }        
    })
    return varSuma
}
console.log(nameSumpar(num2))


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado.
let num2=[1,4,2,3]
function namePotencia(num2) {
    let potencia=[]
    for (let i = 0; i < num2.length; i++) {
      
      
       potencia.push(num2[i] **2)                    
    }
    return potencia   
}
console.log(namePotencia(num2))
//for of
let num3=[9,4,2,8]
function name1(num3) {
    let poten=[]
    for (const element of num3) {
        poten.push(element**2)
    }
    return poten
}
console.log(name1(num3))

//forEach
let num4=[4,5,7,10]
function name2(num4) {
    let potencia1=[]
    num4.forEach(function(pot)
{
    potencia1.push(pot **2)
})
    return potencia1
}
console.log(name2(num4))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.
//invierte letras
let cad="hola mundo tony"
function funcionInvierte(cad) {
    let newCad=""
    for (let i = cad.length-1; i>=0; i--) {
       newCad+=cad[i]       
    }
    return newCad
}
console.log(funcionInvierte(cad))

//invierte palabras
let cad="hola mundo tony"
function funcionInvierte(cad) {
    let palabras = cad.split(" ")
    let newCad=""
    for (let i = palabras.length-1; i>=0; i--) {
       newCad+=palabras[i]+" "     
    }
    return newCad
}
console.log(funcionInvierte(cad))

// 10. Crea una función que calcule el factorial de un número dado.

function factorial(x) {
    let fact=1
    for (let i = 1; i <= x; i++) {
        fact*=i        
    }
   return fact    
}   
console.log(factorial(5))     