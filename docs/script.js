const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
const mensaje = document.getElementById('mensaje');

const mensajesRomanticos = [
    "Eres la razón por la que sonrío cada día.",
    "Mi amor por ti es infinito.",
    "Eres mi todo, mi niña pequeña."
];

btnSi.addEventListener('click', () => {
    const mensajeAleatorio = mensajesRomanticos[Math.floor(Math.random() * mensajesRomanticos.length)];
    mensaje.textContent = mensajeAleatorio;
    mensaje.classList.add('animate__animated', 'animate__heartBeat');
    setTimeout(() => {
        mensaje.classList.remove('animate__animated', 'animate__heartBeat');
    }, 1000);
});

btnNo.addEventListener('click', () => {
    mensaje.textContent = "No puedes decir que no porque nos encontraremos algún día. ¡Vas a ver! 😉";
    mensaje.classList.add('animate__animated', 'animate__shakeX');
    setTimeout(() => {
        mensaje.classList.remove('animate__animated', 'animate__shakeX');
    }, 1000);
});