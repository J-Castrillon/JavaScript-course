'use strict'; 

let persona = (name,lastname,completeName,nickname)=>{
    return (`Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}`); 
}

const name = "Julián";
const lastname = "Castrillón Sánchez";

console.log(persona(name,lastname,name+" "+lastname,"Juliancho")); 

// condicionales; 
let suscripcion = ""; 
if(suscripcion === "Free"){
    console.log("Solo puedes tomar los curos gratis"); 
}else if(suscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(suscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if(suscripcion === "ExpertPlus"){
    console.log("Tu y alguien más pueden tomar TODOS los cursos de Platzi durante un naño");
}

let planes = {
    Free: {
        retorno: "Solo puedes tomar los curos gratis"
    },
    Basic: {
        retorno: "Puedes tomar casi todos los cursos de Platzi durante un mes"
    },
    Expert: {
        retorno: "Puedes tomar casi todos los cursos de Platzi durante un año"
    },
    ExpertPlus: {
        retorno: "Tu y alguien más pueden tomar TODOS los cursos de Platzi durante un ño"
    }
}

for(let plan in planes){
    console.log(planes[plan]); 
}

// While
let i = 0;
while (i<5){
    console.log(`El valor de i es: ${i}`); 
    i+=1; 
} 

i=10; 
while(i>=2){
    console.log(`El valor de i es: ${i}`); 
    i-=1; 
}


if(parseInt(prompt("¿Cuánto es 2+2?")) === 4){
    console.log("Felicitaciones"); 
}else{
    console.log("Perdiste"); 
}


let funciones = (funcion)=>{
    return funcion[0]; 
}

let funcionesDos = (funcion)=>{
    funcion.forEach(elemento => {
        console.log(elemento);
    }); 
}

let funcionesTres = (funcion)=>{
    for(let elemento in funcion){
        console.log(funcion[elemento]); 
    }
}
