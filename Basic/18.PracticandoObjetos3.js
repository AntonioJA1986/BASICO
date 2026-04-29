//1. Crea una función que reciba un objeto persona y muestre su nombre y edad.
let persona = {
 nombre:"Luis",
 edad:25
}
console.log(persona.nombre+" tiene "+ persona.edad+" años")
//2. Función aumentar precio-Haz función que aumente 20%.
let producto = {
 nombre:"Mouse",
 precio:80
}
function aumentarPrecio(x) {
    let aum=0
    for (const key in x) {
           aum=x[key]*1.20       
    }
    return aum
    
}
console.log(aumentarPrecio(producto))

//3. cuenta las propiedades
let alumno = {
 nombre:"Ana",
 edad:20,
 curso:"JS"
}
alumno.celular=947844562
console.log(alumno)

function contarPropiedad(object) {
     let contador=0
    for (const key in object) {   
     contador ++         
}
 return contador  
}
console.log(contarPropiedad(alumno))
//mostrando propiedades
function muestraPropiedades(prop) {
    let band="{"
    for (const key in prop) {
       band +=key +","     
    }
     band = band.slice(0, -1)// quita última coma
     band += "}"
   return band
}
console.log(muestraPropiedades(alumno))

//4.Función sumar valores numéricos
let datos = {
 a:10,
 b:20,
 c:"Hola",
 d:30
}
function sumaNumero(parax) {
    let sumita=0
    for (const t in parax) {
        if (typeof parax[t]==="number") {
            sumita+=parax[t]
        }
    }
    return sumita    
}
console.log(sumaNumero(datos))

//5. Función mayor propiedad
let notas = {
 mate:20,
 ingles:18,
 historia:12
}
function mayorPropiedad(object) {
    let may=0
    let curso = ""
    for (const key in object) {
             if (object[key]>may) {
                may=object[key]
                  curso = key
             }                
    }
    return curso+" : " + may    
}
console.log(mayorPropiedad(notas))

//6. Función cambiar edad
let persona1 = {
 nombre:"Ana",
 edad:20,
 curso:"JS"
}
function cambiarEdad(objeto, nuevaEdad){
    objeto.edad = nuevaEdad
}

cambiarEdad(persona1, 40)

console.log(persona1)
//7. Crear una funcion promedio de notas
let alumno = {
nombre:"Luis",
notas:[15,18,20]
}

//usando forin
function promedio(object) {
    let suma = 0
   for (const key in object.notas) {
       
    suma+=object.notas[key]
   }
   return suma/object.notas.length
  
}
console.log(promedio(alumno))

//usando for
function promedio(object) {
    let suma = 0
   for (let i = 0; i < object.notas.length; i++) {
    suma  += object.notas[i];
   }
   return suma/object.notas.length
  
}
console.log(promedio(alumno))
//8. Función buscar persona en array de objetos

let personas = [
 {nombre:"Luis", edad:20},
 {nombre:"Ana", edad:25},
 {nombre:"Pedro", edad:30}
]

function buscarpersona(object,entrada) {
    for (const key in object) {
            if ( object[key ].nombre===entrada) {
                return object[key]
            }  
        
    }
       return "No encontrado"
}
console.log(buscarpersona(personas,"Ana"))