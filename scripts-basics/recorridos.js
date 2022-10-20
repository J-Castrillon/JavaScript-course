'use strict'; 

let personas = 
[{nombre: "Julián",apellido:"Castrillón",edad:20},
{nombre: "Andrea",apellido:"Caro",edad:20},
{nombre: "Carlos",apellido:"Soza",edad:32}];
                
// Devuelve un arreglo con todos los elementos que cumplan con el filtro;
let edad = personas.filter((persona)=>{
    return persona.edad <= 20; 
})

// Devuelve cada nombre de cada persona que contiene el arreglo; 
let personal = personas.map((persona)=>{
    return persona.nombre; 
})

// Devuelve el elemento que lo contiene  
let apellido = personas.find((persona)=>{
    return persona.apellido === "Castrillón"; 
})

// Realiza una validación y devuelve un bool según si existe o no el elemento que le pasamos por parámetro; 
let alguno = personas.some((articulo)=>{
    return articulo.apellido === "Soza"; 
}); 

