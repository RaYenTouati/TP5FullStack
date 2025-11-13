const http = require('http');
const PORT = 3000;

const serveur = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bonjour depuis mon serveur Node.js');
});

serveur.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
