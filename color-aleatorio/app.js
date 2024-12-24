// Seleccionar los elementos del DOM.
const boton = document.querySelector('button');
const color = document.getElementById('color');

// Generar un color hexadecimal aleatorio.
function generarColorHexAleatorio() {
    let digitos = '0123456789ABCDEF'; // 16 opciones.
    let color = '#'; // El color inicia con #.

    for (let i = 0; i < 6; i++) {
        // Escoger uno de los 16 digitos posibles.
        let indiceAleatorio = Math.floor(Math.random() * 16);
        // Agregarlo al codigo del color.
        color += digitos[indiceAleatorio];
    }
    return color;
}

// Event Listener.
boton.addEventListener('click', function() {
    let colorAleatorio = generarColorHexAleatorio();
    // Actualizar el color de fondo.
    document.body.style.backgroundColor = colorAleatorio;
    // Actualizar el texto.
    color.textContent = colorAleatorio;
});