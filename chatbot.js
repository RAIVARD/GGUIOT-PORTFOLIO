function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const messagesDiv = document.getElementById("messages");

    // Affiche le message de l'utilisateur
    const userMessage = document.createElement("div");
    userMessage.textContent = "Vous : " + userInput;
    userMessage.classList.add("user-message");
    messagesDiv.appendChild(userMessage);

    // Génère une réponse en fonction de la question
    const responseMessage = document.createElement("div");
    responseMessage.classList.add("bot-message");

    if (userInput.toLowerCase().includes("inspiration")) {
        responseMessage.textContent = "Artiste : Mon inspiration vient des collines et des vignes de l'Occitanie, ainsi que des lumières changeantes de la Méditerranée.";
    } else if (userInput.toLowerCase().includes("technique")) {
        responseMessage.textContent = "Artiste : J'utilise principalement des ocres et des couleurs vives, travaillant souvent à partir de mémoire pour ajouter une touche onirique.";
    } else if (userInput.toLowerCase().includes("exposition")) {
        responseMessage.textContent = "Artiste : Mes œuvres sont exposées dans des galeries en Occitanie, mais également disponibles pour visionnement en ligne.";
    } else if (userInput.toLowerCase().includes("oeuvres")) {
        responseMessage.textContent = "Artiste : Mes œuvres représentent des paysages de l'Occitanie, avec des touches de couleurs qui capturent l'émotion du moment.";
    } else {
        responseMessage.textContent = "Artiste : Je suis là pour répondre à vos questions sur mon art. N'hésitez pas à demander !";
    }

    messagesDiv.appendChild(responseMessage);

    // Efface l'entrée de texte et fait défiler vers le bas pour voir le nouveau message
    document.getElementById("userInput").value = "";
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
