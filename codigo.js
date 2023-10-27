const miBoton = document.getElementById("miBoton");
const listaUserPassword = ["martin:gaido", "martin:cesano", "valentina:chiappero", "jimena:romero"];

function loguear(nombre, contraseña, lista) {
    nombreContraseña = nombre + ":" + contraseña;
    return lista.includes(nombreContraseña);
}

miBoton.addEventListener("click", function () { //Se usa el evento click para ejecutar cualquier evento de un enlace o en nuestro caso <a>
    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("Contraseña").value;
    
    if (loguear(usuario, contraseña, listaUserPassword)) {
        window.location.href = "carga.html";
    } else {
        alert("Incorrecto");
    }
    
    document.getElementById("usuario").value = "";
    document.getElementById("Contraseña").value = "";
});