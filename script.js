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
});
