const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
const mensaje = document.getElementById('mensaje');

btnSi.addEventListener('click', () => {
    mensaje.textContent = "¡Sabía que dirías que sí! 💖";
});

btnNo.addEventListener('click', () => {
    mensaje.textContent = "No puedes decir que no porque nos encontraremos algún día. ¡Vas a ver! 😉";
});