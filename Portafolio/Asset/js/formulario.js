document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        var nombre = form.elements["nombre"];
        var telefono = form.elements["telefono"];
        var correo = form.elements["correo"];
        var tema = form.elements["tema"];
        var mensaje = form.elements["mensaje"];

        var nombreValido = /^[a-zA-Z\s]{2,50}$/.test(nombre.value);
        var telefonoValido = /^\d{9,9}$/.test(telefono.value); // Solo caracteres numéricos
        var correoValido = /\S+@\S+\.\S+/.test(correo.value);
        var temaValido = /^[a-zA-Z\s]{2,50}$/.test(tema.value);
        var mensajeValido = /^.{10,500}$/.test(mensaje.value);
        var errores = [];

        if (!nombreValido) {
            errores.push("Por favor, introduce un nombre válido.");
        }

        if (!telefonoValido) {
            errores.push("Por favor, introduce un número de 9 dígitos.");
        }

        if (!correoValido) {
            errores.push("Por favor, introduce un correo electrónico válido.");
        }

        if (!temaValido) {
            errores.push("Por favor, introduce un tema válido.");
        }

        if (!mensajeValido) {
            errores.push("Por favor, introduce un mensaje válido entre 10 y 500 caracteres.");
        }

        if (errores.length > 0) {
            event.preventDefault();
            alert(errores.join("\n")); // Muestra todos los errores juntos en un mensaje
        } else {            
            event.preventDefault(); // Evitar el envío predeterminado
            alert("Formulario enviado con éxito."); // Mostrar mensaje de éxito (puedes modificarlo según tu lógica)
            form.reset();
        }
    });
});