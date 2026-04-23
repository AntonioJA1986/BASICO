// con set no se puede trabajar con indices 
//  los set no admite duplicados 
//declaracion 
let myset= new Set()
//inicializacion
myset=new Set(["Eva", "Calixto", "Velasquez","37"])
console.log(myset)
// metodos comunes
//add -  agregar o añadir datos al final
myset.add ("antonio.juncoa@gmail.com")
console.log(myset)

// delete elimina elementos

myset.delete ("antonio.juncoa@gmail.com") // no funciona con indice se tiene q poner el texto o valor 
console.log(myset)
console.log(myset.delete("38"))//muestre true o false si encuentra el valor
console.log(myset)

//has - comprueba si existe un elemento
console.log (myset.has("Eva"))
console.log (myset.has("Tony"))
myset.add ("antonio.juncoa@gmail.com")

//size - mide el tamaño

console.log (myset.size)
// convertir un set a array
let myarray3 = Array.from(myset)
console.log (myarray3)

//convierte un array a set
myset = new Set(myarray3)
console.log (myset)

//  los set no admite duplicados no se agrega el correo porque ya existe 

myset.add("antonio.juncoa@gmail.com") //  los set no admite duplicados no se agrega el correo porque ya existe 
myset.add("antonio.juncoa@gmail.com") //  los set no admite duplicados no se agrega el correo porque ya existe 
myset.add("Antonio.juncoa@gmail.com") //  esto si agrega porque diferencia las mayusculas y minusculas



