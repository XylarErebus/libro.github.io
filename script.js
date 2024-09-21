let currentPage = 0; // Página actual
const totalPages = 3; // Cambia este número según la cantidad de páginas que tienes

// Función para abrir el libro (muestra la primera página)
function openBook() {
    const cover = document.querySelector(".cover.front");
    cover.style.display = "none"; // Oculta la portada
    showPage(0); // Muestra la primera página
}

// Función para mostrar la siguiente página
function nextPage() {
    if (currentPage < totalPages - 1) { // Si no estamos en la última página
        showPage(currentPage + 1); // Muestra la siguiente página
    } else {
        alert("Ya estás en la última página."); // Mensaje si ya está en la última página
    }
}

// Función para mostrar una página específica
function showPage(page) {
    const pages = document.querySelectorAll(".page");
    pages.forEach((p, index) => {
        p.style.display = "none"; // Oculta todas las páginas
        if (index === page) {
            p.style.display = "block"; // Muestra la página seleccionada
        }
    });
    currentPage = page; // Actualiza la página actual
}
