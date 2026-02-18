const capturarTareaInput = document.getElementById('tarea-input');
const capturaDeTiempo = document.getElementById('tiempo-input');
const boton = document.querySelector("#iniciar-btn");
const notificaciones = document.querySelector("#notificaciones");

boton.addEventListener('click', () => {
    const tarea = capturarTareaInput.value;
    const tiempo = parseInt(capturaDeTiempo.value);

    if (tarea === '' || tiempo === '' || tiempo <= 0) {
        notificaciones.textContent = "Ingrese todos los datos";
        return;
    }

    const mensajeConfirmacion = document.createElement('p');
    mensajeConfirmacion.innerText = `Recordatorio para "${tarea}" programado. Te avisaré en ${tiempo} segundos.`;
    notificaciones.appendChild(mensajeConfirmacion);

    setTimeout(function () {
        const mensajeFinal = document.createElement('h2');
        mensajeFinal.innerText = `¡Recordatorio! Es hora de: "${tarea}"`;
        notificaciones.appendChild(mensajeFinal);
    }, tiempo * 1000);


});



