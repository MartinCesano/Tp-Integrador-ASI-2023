const loginForm = document.getElementById("login-form");
listaUserPassword = ["martin:gaido", "martin:cesano", "valentina:chiappero", "jimena:romero"];

function loguear(nombre, contraseña, lista){//esta funcion hace le damos el usuario y contraseña y comprueba si esta en la lista retorna un valor true o false
    nombreContraseña = nombre + ":" + contraseña
    return lista.includes(nombreContraseña);
}

loginForm.addEventListener("submit", function (event) {// esto es un evento cuando se clickea el submit, esto guardara los valores que esten dentro de el input usuario y el password
    event.preventDefault();// Evita que el formulario se envíe de manera predeterminada
    const usuario = document.getElementById("usuario").value;//guardo el valor de usuario en una variable
    const contraseña = document.getElementById("Contraseña").value;//guardo el valor de contraseña en una variable
    if (loguear(usuario, contraseña, listaUserPassword)){//si entro hacer o no entro
        alert("Correcto");
    }else{
        alert("Incorrecto");
    }
    // Limpia los campos de entrada después de obtener los valores
    document.getElementById("usuario").value = "";
    document.getElementById("Contraseña").value = "";
});
