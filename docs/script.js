const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
const mensaje = document.getElementById('mensaje');

btnSi.addEventListener('click', () => {
    mensaje.textContent = "¡Sabía que dirías que sí! 💖";
    mensaje.classList.remove('hidden');
    mensaje.classList.add('visible', 'animate__animated', 'animate__heartBeat');
    setTimeout(() => {
        mensaje.classList.remove('animate__animated', 'animate__heartBeat');
    }, 1000);
});

btnNo.addEventListener('click', () => {
    mensaje.textContent = "No puedes decir que no porque nos encontraremos algún día. ¡Vas a ver! 😊";
    mensaje.classList.remove('hidden');
    mensaje.classList.add('visible', 'animate__animated', 'animate__shakeX');
    setTimeout(() => {
        mensaje.classList.remove('animate__animated', 'animate__shakeX');
    }, 1000);
});