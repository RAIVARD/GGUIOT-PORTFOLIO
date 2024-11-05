let currentImageIndex = 0;
const images = document.querySelectorAll(".carousel-image");

// Fonction pour afficher l'image actuelle et masquer les autres
function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
    });
}

// Affiche la première image
showImage(currentImageIndex);

// Change d'image toutes les 3 secondes
setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}, 3000);

// Fonction pour passer à l'image suivante avec le bouton
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}
