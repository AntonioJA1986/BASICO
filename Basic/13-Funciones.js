//funciones
function myFuncion() {
    console.log("Hola Tony")
}
for (let i = 0; i < 5; i++) {
    myFuncion()
    
}
//con parámetros
function myFuncion1(name) {
    console.log(`Hola, ${name}`)
}
myFuncion1("Tony")
//funciones anónimas

const myfun1=function (name) {
    console.log(`Hola, ${name}`)
}
myfun1("Antonio Junco")

//Arrow functions
const myfunc3=(name)=>{
     console.log(`Hola, ${name}`)
}
myfunc3("Antonio Junco")

const myfunc4=(name)=> console.log(`Hola, ${name}`)

myfunc4("Antonio Junco")

//parametros
function suma(a,b){
    console.log(a+b)
}
suma(5,6)

const suma= (a,b)=> console.log(a+b)
suma(2,6)

// Retorno de valor
function mult(a,b){
    return a*b
}
console.log(mult(6,6))

//Funciones anidadas
function extern(){
    console.log("Funcion externa")
    function intern()
    {
         console.log("Funcion interna")
    }
}  extern()
    
//funciones de orden superior

const myfun1=function (name) {
    console.log(`Hola, ${name}`)
}
//myfun1("Antonio Junco")
function applyFunc(func,param)
{
func(param)
}
applyFunc(myfun1,"Funcion de orden superior")