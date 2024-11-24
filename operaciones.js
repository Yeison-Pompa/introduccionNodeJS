const fs = require ("fs")
let opcion = process.argv[2];
let nombreDelAnimal = process.argv[3];
let edad = process.argv[4];
let tipoDEAnimal = process.argv[5]
let colorDelAnimal = process.argv[6]
let enfermedad = process.argv[7]


const registrar = ()=>{
const lista = fs.readFileSync("citas.json", "utf-8");
let listaParse = JSON.parse(lista);
listaParse.push({nombreDelAnimal:nombreDelAnimal, edad:edad, tipoDEAnimal:tipoDEAnimal, colorDelAnimal:colorDelAnimal, enfermedad:enfermedad})
fs.writeFileSync("citas.json", JSON.stringify(listaParse))
}


const leer =()=>{
const lista = fs.readFileSync("citas.json", "utf-8");
console.log(lista)
}

if (opcion == "registrar") {
    registrar()
}

if (opcion == "leer") {
    leer()
    
}


module.exports = {registrar,leer}