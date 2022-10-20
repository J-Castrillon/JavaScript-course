'use strict'; 

window.addEventListener('load',()=>{
    // Eventos; 
    // Declaración de variables; 
    let valor1; 
    let valor2; 
    let resultado; 
    let suma = 0; 
    let button=document.querySelector('#operar');
    
    // Función que determina el evento; 
    button.addEventListener('click', (event)=>{
        event.preventDefault(); //No permite que haya una redirección o que se recargue la página. Capturamos el evento; 
        console.log(event); 
        // Inicialización de variables; 
        valor1=document.querySelector('#valor1').value; 
        valor2=document.querySelector('#valor2').value; 
        resultado = document.querySelector('#resultado'); 
        suma = parseInt(valor1)+parseInt(valor2); 

        resultado.append(` El resultado de la suma es: ${suma}`); 
    }); 
}); 
