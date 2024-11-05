document.addEventListener("DOMContentLoaded", () => {
    let currentImageIndex = 0;
    const images = document.querySelectorAll(".carousel-image");

    // Fonction pour afficher l'image actuelle et masquer les autres avec un effet de fondu
    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove("active"); // Retire la classe 'active' de toutes les images
        });
        images[index].classList.add("active"); // Ajoute 'active' uniquement à l'image actuelle
    }

    // Affiche la première image au chargement
    showImage(currentImageIndex);

    // Change d'image toutes les 3 secondes avec transition en fondu
    let carouselInterval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }, 3000);

    // Fonction pour passer à l'image suivante
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    // Fonction pour passer à l'image précédente
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    }

    // Associer les fonctions aux boutons de navigation
    document.querySelector(".next-button").addEventListener("click", nextImage);
    document.querySelector(".prev-button").addEventListener("click", prevImage);

    // Fonction pour démarrer/arrêter le carrousel au survol
    document.querySelector(".carousel").addEventListener("mouseenter", () => {
        clearInterval(carouselInterval); // Arrête l'intervalle
    });

    document.querySelector(".carousel").addEventListener("mouseleave", () => {
        carouselInterval = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        }, 3000); // Redémarre l'intervalle
    });
});
