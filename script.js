// Carousel (simple rotation d'images)
let currentImageIndex = 0;
const images = document.querySelectorAll(".carousel-image");

function rotateImages() {
    images[currentImageIndex].style.display = "none";
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = "block";
}
setInterval(rotateImages, 3000);

// Chatbox (simulé pour une conversation de base)
function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const messagesDiv = document.getElementById("messages");
    
    if (userInput.trim() !== "") {
        const userMessage = document.createElement("div");
        userMessage.textContent = `Vous : ${userInput}`;
        messagesDiv.appendChild(userMessage);
        
        const responseMessage = document.createElement("div");
        responseMessage.textContent = "Artiste : Merci de votre message !";
        messagesDiv.appendChild(responseMessage);
        
        document.getElementById("userInput").value = "";
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
}
