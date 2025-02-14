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
    mensaje.classList.remove('hidden');
    mensaje.classList.add('visible', 'animate__animated', 'animate__heartBeat');
    setTimeout(() => {
        mensaje.classList.remove('animate__animated', 'animate__heartBeat');
    }, 1000);
});

btnNo.addEventListener('click', () => {
    mensaje.textContent = "¡Casémonos! 💍";
    mensaje.classList.remove('hidden');
    mensaje.classList.add('visible', 'animate__animated', 'animate__tada');
    setTimeout(() => {
        mensaje.classList.remove('animate__animated', 'animate__tada');
    }, 1000);
});