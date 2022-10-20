'use strict'; 

let personas = ["Julián","Lency","Carlos","Carla"]; 

let newPerson = personas.push("Juancha"); 
console.log(personas.pop()); 
console.log(personas.unshift("Castrillón"));
console.log(personas); 
console.log(personas.shift("Castrillón"));
console.log(personas); 
console.log(personas.indexOf("Lency")); 

let persona = (i)=>{
    console.log(`Hola, ${personas[i]}`); 
}

// Diferentes bucles for para recorrer arreglos; 
for(let i = 0; i<personas.length; i+=1){
    persona(i);  
}

console.log("--------"); 

for(let i in personas){
    persona(i); 
}

console.log("--------"); 

personas.forEach((i) =>{
    console.log(`Hola, ${i}`); 
})

console.log("--------"); 

for(let i of personas){
    console.log(`Hola, ${i}`);
}



