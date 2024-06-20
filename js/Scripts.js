console.log("Hoja de Vida Interactiva Cargada");

// Función para agregar una habilidad a la lista
function añadirHabilidad() {
    let newSkill = prompt("Introduce una nueva habilidad:");
    if (newSkill) {
        let ul = document.getElementById('skillsList');
        let li = document.createElement('li');
        li.textContent = newSkill;
        ul.appendChild(li);
    }
}

document.getElementById('addSkill').addEventListener('click', añadirHabilidad);

// Función para mostrar un mensaje personalizado al visitante
function saludoPersonalizado() {
    alert("¡Gracias por visitar mi sección de experiencia laboral!");
}

document.getElementById('btnContactar').addEventListener('click', saludoPersonalizado);


// Mostrar certificaciones al cargar la página
const certificaciones = ["Curso A", "Curso B", "Taller C", "Seminario D"];

function mostrarCertificaciones() {
    let ul = document.getElementById('listaCertificaciones');
    for (let i = 0; i < certificaciones.length; i++) {
        let li = document.createElement('li');
        li.textContent = certificaciones[i];
        ul.appendChild(li);
    }
}

window.onload = mostrarCertificaciones;

// Mostrar proyectos anteriores al hacer clic en el botón "Ver Proyectos Anteriores"
const proyectosAnteriores = ["Proyecto A", "Proyecto B", "Proyecto C", "Proyecto D"];

function mostrarProyectosAnteriores() {
    let cantidadProyectos = prompt("¿Cuántos proyectos anteriores deseas ver?");
    if (cantidadProyectos && !isNaN(cantidadProyectos) && cantidadProyectos <= proyectosAnteriores.length) {
        let ul = document.getElementById('listaProyectosAnteriores');
        for (let i = 0; i < cantidadProyectos; i++) {
            let li = document.createElement('li');
            li.textContent = proyectosAnteriores[i];
            ul.appendChild(li);
        }
    } else {
        alert("Por favor, ingresa un número válido y dentro del rango de proyectos.");
    }
}

document.getElementById('btnVerProyectos').addEventListener('click', mostrarProyectosAnteriores);

// Manejar el envío del formulario de contacto
document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    
    // Obtener el correo electrónico y mensaje del usuario desde el formulario
    const correoUsuario = document.getElementById('email').value;
    const mensajeUsuario = document.getElementById('message').value;
    
    // Mostrar un mensaje de alerta con el correo y mensaje ingresados
    alert(`Gracias ${correoUsuario}, tu mensaje "${mensajeUsuario}" ha sido enviado. Me pondré en contacto contigo pronto!`);
    
    // Limpiar los campos del formulario
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});

// Función para permitir al usuario calificar tu hoja de vida
const calificarHojaDeVida = () => {
    let calificacion = prompt("Del 1 al 10, ¿cómo calificarías mi hoja de vida?");
    alert(`¡Gracias por calificar con un ${calificacion}!`);
}

// Agregar el evento de clic al botón "Calificar Hoja de Vida"
document.getElementById('btnCalificar').addEventListener('click', calificarHojaDeVida);

