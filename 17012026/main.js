/* const sumar = function(a, b) {
  return a + b;
};

const sumar2 = (a, b) => a + b;

const numeros = [1, 2, 3];
numeros.forEach(function(numero, indice) {
    console.log(`El elemento ${numero} está en el índice ${indice}`);
});


const dobles = numeros.map(numero => numero * 2); // dobles es [2, 4, 6]
 */


const nombreSistema = "admin";
const contraSistema = "12345";

const nombre = document.getElementById("name");
const contra = document.querySelector("#password");
const boton = document.getElementById("submit");
const label = document.getElementById("label");
const titulo = document.getElementById("titulo");


console.log(nombreSistema);
console.log(contraSistema);


    
boton.addEventListener("click", () => {
    const namecapture = nombre.value.trim();
    const contracapture = contra.value.trim();
});

titulo.innerText = "Usuario";









