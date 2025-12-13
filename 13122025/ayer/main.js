const usuarioCorrecto = "Santiago";
const contrasenaCorrecto = "12345";

const nombre = document.getElementById('name')
const contrasena = document.getElementById("password")
const quiero = document.getElementById('btn')

quiero.addEventListener('click', () => {
    const namecapture = nombre.value.trim();
    const contracapture = contrasena.value.trim();
});

function validar (namecapture, contracapture) {

    if (namecapture === usuarioCorrecto && contracapture===contrasenaCorrecto) {
        alert("Bienvenido")
    } else {
         alert("Datos Incorrectos")
    }
  
}

/* const nombre = document.querySelector('#name') */
const nombre2 = document.querySelector('.input')
console.log(nombre2);

quiero.addEventListener('click', () => {
    const namecapture = nombre2.value.trim();
    console.log(namecapture);
});
