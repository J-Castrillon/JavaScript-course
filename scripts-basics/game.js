'use strict'; 

// Operador ternario para condiciones: 
//codition ? true : false; //Donde en el true sería el if normal y el : es simplemente un else; 
let number = Math.round(Math.random(1,10)*10); 
console.log(number); 
number > 4 ? console.log("Correcto") : console.log("No es correcto");  

// Juego simple de piedra papel y tijera; 
// Números aleatorios de 1 a 3; 
let saqueMaquina; 
let aleatorio = Math.round(Math.random()*(1,2)+1); 

switch(aleatorio){
    case 1: 
        saqueMaquina = "Piedra"; 
        break; 
    case 2:  
        saqueMaquina = "Papel"; 
        break; 
    case 3: 
        saqueMaquina = "Tijera"; 
        break;
}

let usuario = (saqueUsuario)=>{
    console.log(`Usuario: ${saqueUsuario} Máquina: ${saqueMaquina}`); 
    if((saqueUsuario == "Papel" && saqueMaquina == "Piedra") || (saqueUsuario == "Piedra" && saqueMaquina == "Tijera") 
    || (saqueUsuario == "Tijera" && saqueMaquina == "Papel")){
        console.log("Gana el usuario"); 
    }else if(saqueUsuario == saqueMaquina){
        console.log("Es un empate"); 
    } else {
        console.log("Gana la máquina");
    }
}

usuario("Tijera"); 





