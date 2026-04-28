// 1. Crea un objeto con 3 propiedades
let Producto={
    id:1,
    nombre: "Inca Kola",
    tamaño: "3L"
}

console.log(Producto)

// 2. Accede y muestra su valor
console.log(Producto.id)
console.log(Producto.nombre)
console.log(Producto.tamaño)

// 3. Agrega una nueva propiedad
Producto.categoria="bebida"
console.log(Producto)

// 4. Elimina una de las 3 primeras propiedades
delete Producto.id
delete Producto.nombre
delete Producto.tamaño
console.log(Producto)

// 5. Agrega una función e invócala
let Producto2={
    codigo:"001",
    marca: "CocaCola",
    tamaño:"3L",
    mensaje: function(){
console.log("Bebida gasificada reducida en Calorías")
    }     
}
Producto2.mensaje()

// 6. Itera las propiedades del objeto
variable=""
for (const key in Producto2) {  
    console.log(key)   
}
// 7. Crea un objeto anidado

let Producto3={
    codigo:"001",
    marca: "CocaCola",
    tamaño:"3L",
    mensaje: function(){
    console.log("Bebida gasificada reducida en Calorías")
    },  
        desk:{
        descripcion: "Alto en azucar",
        version: "familiar",    
        mensaje2: function(){
        console.log("La bebida que acompaña a la familia")
            }   
     }   
}

// 8. Accede y muestra el valor de las propiedades anidadas
Producto3.mensaje()
Producto3.desk.mensaje2()

// 9. Comprueba si los dos objetos creados son iguales
let perro1={
    id:1,
    nombre: "boby",
    raza: "pitbul"
}
let perro2={
    id:2,
    nombre: "boby",
    raza: "pitbul"
}
console.log(perro1===perro2)
console.log(perro1.nombre===perro2.nombre&&perro1.raza===perro2.raza)


// 10. Comprueba si dos propiedades diferentes son iguales
console.log(JSON.stringify(perro1) === JSON.stringify(perro2))
 

//11. Crea una Array de tres productos con nombre y precio y Muestra solo productos mayores a 100.
let productojunco=[
{nombre: "Laptop", precio:3000},
{nombre:"Mouse", precio:80},
{nombre:"Teclado", precio:150}
] 
//console.log(productojunco) for...in Recorre índices o propiedades.
//for...of Recorre valores directamente.

for (const producto of productojunco) {
    if (producto.precio > 100) {
        console.log(producto);
   }       
}

let masCaro = productojunco[0];
for (const productoCaro of productojunco) {
    if (productoCaro.precio > masCaro.precio) {
        masCaro = productojunco     
   }       
}
  console.log(masCaro);

//12. Descuenta 2 panes y suma 5 leches.
  let tienda={
   arroz: 10,
   leche: 5,
   pan: 20
  }
 for (const key in tienda) {
    if (key=="pan") {
        tienda[key]-=2
    }
    if (key=="leche") {
        tienda[key]+=5
    }
 }
 console.log(tienda)

 let tienda2={
   arroz: 10,
   leche: 25,
   pan: 30
  }
  tienda2.pan-=2
  tienda2.leche+=5
   console.log(tienda2)
   //13. Crear objeto persona y Muestra el nombre.
   let person={
    nombre: "Daryl",
    edad:2,
    pais:"Perú"    
   }
   console.log(person.nombre)
   //14. Cambiar propiedad Cambia edad a 30.
   let usuario = {
            nombre:"Luis",
            edad:25
        }
        console.log(usuario)
        usuario.edad=30
        console.log(usuario)
    //15.Agregar propiedad nueva
        usuario.correo="luis@gmail.com"
        console.log(usuario)
    //16.Del objeto anterior elimina correo.
    delete usuario.correo
     console.log(usuario)

     //17.Recorrer objeto
     let auto = {
    marca:"Toyota",
    modelo:"Yaris",
    año:2022
    }
    for (const key in auto) {
         console.log(key+":"+auto[key])
                      
    }
    //18. Haz función que cuente cuántas propiedades tiene un objeto
let auto2 = {
    marca:"Toyota",
    modelo:"Yaris",
    año:2022
    }
     
    function cuenta(parametro) {
       let contador = 0;
        for (const key in auto2) {
            contador++   
           
        }
        return contador
    }
     console.log(cuenta(auto2))
    //19. Haz función que cuente solo propiedades numéricas:
    let datos = {
 nombre:"Antonio",
 edad:40,
 sueldo:3000
}

function numeric(objets) {
let contado=0
    for (const key in objets) {
        if (typeof objets[key]==="number") {
         contado++   
        }        
    }
    return contado
    
}

console.log(numeric(datos))
//19. Suma todas las notas.
let notas = {
 mate:15,
 ingles:20,
 historia:20
}
let sum=0
for (const element in notas) {  
    sum+=notas[element]
}
console.log(sum)

for (const element in notas) {  
    console.log(element)
}
for (const element in notas) {  
    console.log(notas[element])
}
//20. resta 3 panes y suma 2 arroz
let tienda3 = {
 arroz:10,
 leche:5,
 pan:20
}
//tienda3.pan-=3
//tienda3.arroz+=2
//console.log(tienda3)
for (const key in tienda3) {
    if (key==="pan") {
        tienda3[key] -=3
    }
    if (key==="arroz") {
        tienda3[key]+=2
    }         
}
console.log(tienda3)

//21. Aumentar precios - Aumenta 20%.
let producto5 = {
 nombre:"Mouse",
 precio:80
}
for (const key in producto5) {
   if (key==="precio") {
    //producto5[key]=producto5[key]+(producto5[key]*0.20)
   // producto5[key]+=(producto5[key]*0.20)
    producto5[key]*=1.20
   }        
}
console.log(producto5)