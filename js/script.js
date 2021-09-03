function cambiarDiaNoche() {

    let botonModif = document.body;
    botonModif.classList.toggle('noche');
}

function mostrarModal() {

    let botonModif = document.getElementById('ventana-modal');
    botonModif.style.display='block';
}

function ocultarModal() {

    let botonModif = document.getElementById('ventana-modal');
    botonModif.style.display='none';
}

// const grupEdif = document.getElementById("grup-building");
// const txtAfectado = document.getElementById("txt-building");
// grupEdif.addEventListener("mouseover", () => {
//     txtAfectado.className = "building-txt";
// }, false);
// grupEdif.addEventListener("mouseout", () => {
//     txtAfectado.className = "";
// }, false);