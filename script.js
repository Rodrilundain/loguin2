document.addEventListener("DOMContentLoaded", () => {
    const inicioBtn = document.getElementById("inicioBtn");
    const registroBtn = document.getElementById("registroBtn");
    const formularioCaja = document.querySelector(".formulario-caja");

    inicioBtn.addEventListener("click", () => {
        inicioBtn.classList.add("activo");
        registroBtn.classList.remove("activo");
        formularioCaja.style.transform = "rotateY(0deg)";
    });

    registroBtn.addEventListener("click", () => {
        registroBtn.classList.add("activo");
        inicioBtn.classList.remove("activo");
        formularioCaja.style.transform = "rotateY(180deg)";
    });

    document.getElementById("formularioInicio").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener valores de los inputs
    let usuario = document.querySelector("#formularioInicio input[type='email']").value;
    let contraseña = document.querySelector("#formularioInicio input[type='password']").value;

    // Validar credenciales
    if (usuario === "CallCenter@grupofiancar.com" && contraseña === "Fiancar2025") {
        window.location.href = "https://rodrilundain.github.io/index.callcenter/";
    } else {
        alert("Usuario o contraseña incorrectos. Inténtalo nuevamente.");
    }
});

});
