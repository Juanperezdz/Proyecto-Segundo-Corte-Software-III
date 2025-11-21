export function initCategoriaAnimacion(items: NodeListOf<HTMLElement>) {
    let activo: HTMLElement | null = null;

    items.forEach((li) => {
        const link = li.querySelector('a'); // <--- obtenemos el a interno
        if (!link) return;

        link.addEventListener("click", (event) => {
            event.preventDefault(); // evita navegación por ahora (opcional)

            // Quitar clase del link activo anterior
            if (activo) {
                activo.classList.remove("activo");
            }

            // Agregar clase al nuevo link
            link.classList.add("activo");
            activo = link;
        });
    });
}
