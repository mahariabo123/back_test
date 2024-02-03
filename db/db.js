// db/mongoose.js

const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://andriamahefazafy_mahali:SIeBkN1ep26iHVwt@cluster0.jozlkgg.mongodb.net/?retryWrites=true&w=majority"; // Remplacez ceci par l'URI réel de votre base de données MongoDB

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => {
  console.log('Connexion à MongoDB établie avec succès.');
});

module.exports = mongoose;
