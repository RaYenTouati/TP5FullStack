const http = require('http');
const fs = require('fs');

const PORT = 8081;

const serveur = http.createServer((req, res) => {
  fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end(`
        <h1>Erreur interne du serveur</h1>
        <p>Impossible de lire le fichier demandé.</p>
        <footer>Serveur Node.js</footer>
      `);
    } else {
      // Génération dynamique de la page HTML
      const htmlContent = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <title>Serveur Node.js</title>
          <style>
            body { font-family: Arial; text-align: center; margin-top: 50px; }
            h1 { color: #007acc; }
            footer { margin-top: 30px; font-size: 0.9em; color: gray; }
          </style>
        </head>
        <body>
          <h1>Bienvenue sur mon serveur Node.js</h1>
          <p>${data}</p>
          <footer>© 2025 - Mon Serveur Node.js</footer>
        </body>
        </html>
      `;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(htmlContent);
    }
  });
});

serveur.listen(PORT, () => {
  console.log(`Serveur HTML en écoute sur http://localhost:${PORT}`);
});
