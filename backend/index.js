// Import des modules express et mysql
import express from "express"; // Import du module Express
import mysql from "mysql";     // Import du module MySQL

// Création de l'instance Express
const app = express();

// Configuration de la connexion à la base de données MySQL
const db = mysql.createConnection({
  host: "localhost",      // Adresse du serveur MySQL
  user: "root",           // Nom d'utilisateur de la base de données
  password: "jebossela",  // Mot de passe de la base de données
  database: "mes_livres"  // Nom de la base de données
});

// Définition de la route racine ("/") avec une réponse JSON
app.get("/", (req, res) => {
  res.json("hello this is the backend"); // Répond avec un message JSON
});

// Démarrage du serveur Express sur le port 8800
app.listen(8800, () => {
  console.log("Connected to backend!"); // Affiche un message lorsque le serveur démarre
});