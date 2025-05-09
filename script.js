document.getElementById("addNotebook").addEventListener("click", function() {
    let notebookName = prompt("Nome do novo caderno:");
    if (notebookName) {
        let notebook = document.createElement("div");
        notebook.textContent = notebookName;
        notebook.classList.add("notebook");
        notebook.addEventListener("click", function() {
            alert(`Abrindo caderno: ${notebookName}`);
        });

        document.getElementById("notebooks").appendChild(notebook);
    }
});

// Função para salvar anotações localmente
document.getElementById("notesContent").addEventListener("input", function() {
    localStorage.setItem("savedNotes", this.value);
});

// Carregar anotações ao iniciar
window.onload = function() {
    document.getElementById("notesContent").value = localStorage.getItem("savedNotes") || "";
};
