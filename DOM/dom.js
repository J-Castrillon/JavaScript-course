'use strict'; 

window.addEventListener('load',()=>{
    // Lectura; 
    let titulo = document.querySelector('#MainTitle'); 
    console.log(titulo); 
    let parrafo = document.querySelector('.parrafo'); 
    let texto = document.querySelector('input'); 

    console.log(texto.value); 

    // Escritura; 
    titulo.innerHTML = "Seguimos con JavaScript";
    // Traer atributos de los elementos; 
    console.log(titulo.getAttribute('id'));
    // Modificar atributos de los elementos; 
    titulo.setAttribute('id','titulo'); 
    console.log(titulo.getAttribute('id'));

    // Agregar clases; 
    titulo.classList.add('titulos'); 
    console.log(titulo.getAttribute('class')); 
    // Crear elementos; 
    let imagen = document.createElement('img'); 
    imagen.src= 'https://content.techgig.com/photo/77087595/Guide-How-to-build-career-as-a-programmer-without-college-degree.jpg';
    imagen.setAttribute('width',"15%"); 
     
    // Mostrar o imprimir elementos creados; 
    parrafo.innerHTML = ""; 
    parrafo.append(imagen);
});

