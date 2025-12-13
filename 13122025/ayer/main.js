const usuarioCorrecto = "santiago";
const contrasenaCorrecto = "12345";

const nombre = document.getElementById('name')
const contrasena = document.getElementById("password")
const quiero = document.getElementById('btn')

quiero.addEventListener('click', () => {
    const namecapture = nombre.value.trim();
    const contracapture = contrasena.value.trim();
    validar(namecapture, contracapture)
});

function validar(namecapture, contracapture) {

    if (namecapture === usuarioCorrecto && contracapture === contrasenaCorrecto) {
        alert("Bienvenido")
    } else {
        alert("Datos Incorrectos")
    }

}
