<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>À propos de l'artiste</title>
    <style>
        /* Global styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: #000;
            color: #fff;
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
        }

        .logo {
            font-size: 1.5em;
        }

        .logo a {
            text-decoration: none;
            color: #fff;
            font-size: 2em;
        }

        nav a {
            margin-left: 20px;
            color: #fff;
            text-decoration: none;
            font-weight: 300;
        }

        nav a:hover {
            text-decoration: underline;
        }

        .about-section {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            padding: 50px;
            max-width: 600px;
            margin: auto;
        }

        .about-section h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
        }

        .about-section p {
            font-size: 1.1em;
            line-height: 1.6;
            margin-bottom: 20px;
        }

        button {
            padding: 8px;
            border: none;
            background-color: #f1c40f;
            color: #111;
            border-radius: 4px;
            cursor: pointer;
            margin-right: 5px;
        }

        button:hover {
            background-color: #ffda79;
        }

        /* Chatbot Section */
        .chatbot-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #222;
            padding: 20px;
            border-radius: 10px;
            max-width: 300px;
            width: 100%;
            box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
        }

        .messages {
            max-height: 200px;
            overflow-y: auto;
            margin-bottom: 10px;
        }

        .user-message, .bot-message {
            padding: 8px;
            margin-bottom: 5px;
            border-radius: 5px;
        }

        .user-message {
            background-color: #f1c40f;
            color: #111;
            text-align: left;
        }

        .bot-message {
            background-color: #555;
            color: #fff;
            text-align: left;
        }

        .input-container {
            display: flex;
            align-items: center;
        }

        #userInput {
            flex-grow: 1;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-right: 5px;
        }

        .chat-icon {
            font-size: 1.5em;
            color: #fff;
        }
    </style>
</head>
<body>
    <header>
        <div class="logo">
            <a href="votre_fichier.pdf" target="_blank">📄</a>
        </div>
        <nav>
            <a href="#home">Accueil</a>
            <a href="#works">Œuvres</a>
            <a href="#about">À propos</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <main class="about-section">
        <h1>À propos de l'artiste</h1>
        <p>Biographie courte de l'artiste, avec une présentation des influences, du parcours et des projets artistiques.</p>
        <button>En savoir plus</button>
    </main>

    <!-- Chatbot Section -->
    <div class="chatbot-container">
        <div class="messages" id="messages"></div>
        <div class="input-container">
            <input type="text" id="userInput" placeholder="Posez votre question..." />
            <button onclick="sendMessage()">Envoyer</button>
        </div>
    </div>

    <script>
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
    </script>
</body>
</html>
