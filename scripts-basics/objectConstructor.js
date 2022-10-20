'use strict'; 

// let coche = {
//     coche1:{
//         marca: "Chevrolet",
//         modelo: 2001,
//         color: "Azul",
//         numeroPlaca: 569
//     },
//     coche2:{
//         marca: "KIA",
//         modelo: 2002,
//         color: "Rojo",
//         numeroPlaca: 529
//     },
//     coche3:{
//         marca: "Mazda",
//         modelo: 2020,
//         color: "Blanco",
//         numeroPlaca: 234
//     }
// }

// 30 carros que se construyan solos
// Función constructora; 
function autos(marca, modelo, color, numeroPlaca){
    this.marca = marca; 
    this.modelo = modelo; 
    this.color = color;
    this.numeroPlaca = numeroPlaca; 
}

let autosNuevos = []; 

for(let i = 0; i<=3; i+=1){
    let marca = prompt("¿Qué marca es tu vehículo?"); 
    let modelo = prompt("¿Qué modelo es tu vehículo?"); 
    let color = prompt("¿De qué color es tu vehículo?"); 
    let numeroPlaca = prompt("¿Cómo es el número de la placa de tu vehículo?"); 

    autosNuevos.push(new autos(marca,modelo,color,numeroPlaca));  
}

for(let i in autosNuevos){
    console.log(autosNuevos[i]); 
}



