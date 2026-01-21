document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".check");

    checkboxes.forEach(checkbox => {
        const id = checkbox.dataset.id;

        // Recupera estado salvo
        const saved = localStorage.getItem(id);
        if (saved === "true") {
            checkbox.checked = true;
        }

        // Salva quando clicar
        checkbox.addEventListener("change", () => {
            localStorage.setItem(id, checkbox.checked);
        });
    });
});
