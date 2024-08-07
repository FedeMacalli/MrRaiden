// Selecciona todos los elementos con la clase "gallery-item"
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        // Obtiene la ruta de la imagen y el texto desde los atributos data-*
        const imageSrc = this.getAttribute('data-image');
        const headingContent = this.getAttribute('data-heading');
        const textContent = this.getAttribute('data-text');

        // Llama a la función openModal con los valores obtenidos
        openModal(imageSrc, headingContent, textContent);
    });
});

function openModal(imageSrc, headingContent, textContent) {
    document.getElementById("modal-image").src = imageSrc;
    document.getElementById("modal-heading").innerText = headingContent;
    document.getElementById("modal-text-content").innerText = textContent;
    document.getElementById("modal").style.display = "block";
    document.getElementById("header").style.display = "none";
    document.body.classList.add("modal-open");
    abrir.classList.add("invisible")
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("header").style.display = "flex";
    document.body.classList.remove("modal-open");
    abrir.classList.remove("invisible")
}

//Para barra hamburguesa

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir-btn");
const cerrar = document.querySelector("#cerrar-btn");

abrir.addEventListener("click", () => {
  nav.classList.add("nav-visible")
  abrir.classList.add("invisible")
})

cerrar.addEventListener("click", () => {
  nav.classList.remove("nav-visible")
  abrir.classList.remove("invisible")
})

nav.addEventListener("click", () => {
  nav.classList.remove("nav-visible")
  abrir.classList.remove("invisible")
})

if(nav = "nav-visible"){
    document.getElementById('abrir-btn').style.display = "none";
} else {
    document.getElementById('abrir-btn').style.display = "block";
}