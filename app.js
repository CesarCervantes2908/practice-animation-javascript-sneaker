//Script para la animación 3D de la tarjeta 
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const sneakerImage = document.querySelector('img');
const titleH1 = document.querySelector('h1.title');
const description = document.querySelector('h3');
const buttons = document.querySelectorAll('button');


//Animación para girar la carta
container.addEventListener('mouseover', (event)=>{
    let atenuador = 10;
    let ejeX = (event.pageX - (window.innerWidth / 2)) /atenuador;
    let ejeY = ((window.innerHeight / 2) - event.pageY) / atenuador;
    card.style.transition = '';
    card.style.transform = `rotateX(${ejeY}deg) rotateY(${ejeX}deg)`;
});

//Animación para desplazar los elementos seleccionados por el eje Z
container.addEventListener('mouseenter', (event)=>{
    sneakerImage.style.transform = 'translateZ(150px) rotateZ(-45deg)';
    titleH1.style.transform = 'translateZ(100px)';
    description.style.transform = 'translateZ(100px)';
    buttons.forEach(button=>button.style.transform = 'translateZ(100px)');
});

//Animación para regresar la carta a su estado original
container.addEventListener('mouseleave', (event)=>{
    card.style.transition = 'all 0.75s ease-out';
    card.style.transform = '';
    sneakerImage.style.transform = '';
    titleH1.style.transform = '';
    description.style.transform = '';
    buttons.forEach(button=>button.style.transform = '');

});