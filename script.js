    function toggleDetails(element) {
        const details = element.parentElement.nextElementSibling;
        const isVisible = details.style.display === "block";

        details.style.display = isVisible ? "none" : "block";

        element.textContent = isVisible? "+" :"-";

        element.classList.toggle("open", !isVisible);
    }

    function openModal(src) {
        document.getElementById("modalImage").src = src; // Définit l'image source
        document.getElementById("imageModal").style.display = "flex"; // Affiche la modal
    }
    
    function closeModal() {
        document.getElementById("imageModal").style.display = "none"; // Cache la modal
    }