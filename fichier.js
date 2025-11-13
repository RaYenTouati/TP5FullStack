const fs = require('fs');

fs.readFile('texte.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur de lecture :', err);
    return;
  }
  console.log('Contenu du fichier :', data);

  fs.writeFile('copie.txt', data + '\nCopie créée avec Node.js', (err) => {
    if (err) console.error("Erreur d'écriture :", err);
    else console.log("Copie créée avec succès !");
  });
});
