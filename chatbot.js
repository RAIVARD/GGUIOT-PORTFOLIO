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

    // Logique des réponses basées sur des mots-clés
    if (userInput.toLowerCase().includes("inspiration")) {
        responseMessage.textContent = "Artiste : Mon inspiration vient des collines et des vignes de l'Occitanie, ainsi que des lumières changeantes de la Méditerranée.";
    } else if (userInput.toLowerCase().includes("technique")) {
        responseMessage.textContent = "Artiste : J'utilise principalement des ocres et des couleurs vives, et je travaille souvent de mémoire pour ajouter une touche onirique.";
    } else if (userInput.toLowerCase().includes("exposition")) {
        responseMessage.textContent = "Artiste : Mes œuvres sont exposées dans des galeries en Occitanie, mais également disponibles pour visionnement en ligne.";
    } else if (userInput.toLowerCase().includes("oeuvres") || userInput.toLowerCase().includes("tableaux")) {
        responseMessage.textContent = "Artiste : Mes œuvres capturent les paysages de l'Occitanie avec des couleurs vives pour exprimer l'émotion du moment.";
    } else if (userInput.toLowerCase().includes("couleurs") || userInput.toLowerCase().includes("palette")) {
        responseMessage.textContent = "Artiste : Ma palette de couleurs se compose principalement de tons ocre et vifs, inspirés par les paysages de la région.";
    } else if (userInput.toLowerCase().includes("projet") || userInput.toLowerCase().includes("avenir")) {
        responseMessage.textContent = "Artiste : Mon prochain projet est d'explorer les variations de lumière au fil des saisons dans les vignes et les montagnes.";
    } else if (userInput.toLowerCase().includes("cours") || userInput.toLowerCase().includes("enseignement")) {
        responseMessage.textContent = "Artiste : Je propose des cours de peinture de temps en temps, principalement axés sur l'exploration des couleurs et la composition.";
    } else if (userInput.toLowerCase().includes("prix") || userInput.toLowerCase().includes("achat")) {
        responseMessage.textContent = "Artiste : Mes œuvres sont disponibles à la vente. Pour plus de détails, vous pouvez me contacter directement.";
    } else if (userInput.toLowerCase().includes("influence") || userInput.toLowerCase().includes("influences")) {
        responseMessage.textContent = "Artiste : Je suis influencé par des artistes comme Gustave Courbet, Paul Cézanne et Jean Hugo, mais aussi par la nature elle-même.";
    } else if (userInput.toLowerCase().includes("vendez-vous vos peintures")) {
        responseMessage.textContent = "Artiste : Je peins pour moi, mais nous pouvons en discuter au besoin.";
    } else if (userInput.toLowerCase().includes("que peignez-vous en ce moment")) {
        responseMessage.textContent = "Artiste : En ce moment, je peins mes paysages favoris, mais peut-être avec davantage de nostalgie. J'y intègre mes enfants, ma famille.";
    } else {
        responseMessage.textContent = "Artiste : Je suis là pour répondre à vos questions sur mon art. N'hésitez pas à demander !";
    }

    messagesDiv.appendChild(responseMessage);

    // Efface l'entrée de texte et fait défiler vers le bas pour voir le nouveau message
    document.getElementById("userInput").value = "";
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

}
