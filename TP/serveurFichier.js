// Importation des modules nécessaires
const http = require('http');
const fs = require('fs');

// Port du serveur
const PORT = 8080;

// Création du serveur
const serveur = http.createServer((req, res) => {
  // Lecture du fichier message.txt
  fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
      // En cas d’erreur : fichier introuvable ou autre
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end("Erreur serveur : impossible de lire le fichier !");
      console.error("Erreur de lecture :", err);
    } else {
      // Si tout va bien, envoi du contenu
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    }
  });
});

// Démarrage du serveur
serveur.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
