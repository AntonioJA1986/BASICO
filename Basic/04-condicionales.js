let a=10
if(a==18)
{
    console.log("La edad es 18")
} 
else
{
 console.log("La edad no es 18")
}

// else if
if(a==18)
{
    console.log("La edad es 18")
} 
else if(a<18)
    {
        console.log("Es menor de Edad.")
    }
else
{
 console.log("La edad no es 18")
}



//swith
let day=8
let nameday
switch(day)
{
    case 0:
        nameday="Lunes"
        break   
        case 1:
        nameday="Martes"
        break 
        case 2:
        nameday="Miercoles"
        break 
        case 3:
        nameday="Jueves"
        break 
        case 4:
        nameday="Viernes"
        break 
        case 5:
        nameday="Sábado"
        break 
        case 6:
        nameday="Domingo"
        break 
        default: 
        nameday="El número de día es incorrecto"
}
console.log(nameday)
