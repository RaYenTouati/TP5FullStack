const http = require('http');
const PORT = process.argv[2] || 3000;

const serveur = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Serveur Node.js en écoute sur le port ${PORT}`);
});

serveur.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
