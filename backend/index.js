// Import des modules express, mysql et dotenv
import express from "express"; // Import du module Express
import mysql from "mysql";     // Import du module MySQL
import dotenv from "dotenv";   // Import du module dotenv
import cors from "cors";

// Chargement des variables d'environnement à partir du fichier .env
dotenv.config();

// Création de l'instance Express
const app = express();

app.use(express.json()); // Utilisation du middleware pour analyser les requêtes JSON
app.use(cors());

// Configuration de la connexion à la base de données MySQL en utilisant les variables d'environnement
const db = mysql.createConnection({
  host: process.env.DB_HOST,        // Adresse du serveur MySQL
  user: process.env.DB_USER,        // Nom d'utilisateur de la base de données
  password: process.env.DB_PASSWORD,// Mot de passe de la base de données
  database: process.env.DB_DATABASE // Nom de la base de données
});

// Définition de la route racine ("/") avec une réponse JSON
app.get("/", (req, res) => {
  res.json("hello this is the backend"); // Répond avec un message JSON
});

// Définition de la route "/livres" pour récupérer des données depuis la base de données
app.get("/livres", (req, res) => {
  const q = "SELECT * FROM livres; "; // Requête SQL pour sélectionner tous les livres
  db.query(q, (err, data) => {
    if (err) return res.json(err); // Gestion des erreurs de la requête SQL
    return res.json(data);        // Réponse JSON avec les données récupérées
  });
});

// Définition de la route POST "/livres" pour créer un nouveau livre
app.post("/livres", (req, res) => {
  const q = "INSERT INTO livres (`title`, `desc`, `price`, `cover` ) VALUES (?)"; // Requête SQL pour insérer un nouveau livre
  const values = [
    req.body.title,  // Récupère le titre du livre à partir du corps de la requête
    req.body.desc,   // Récupère la description du livre à partir du corps de la requête
    req.body.price,  // Prix du livre provenant de req.body
    req.body.cover,  // Récupère la couverture du livre à partir du corps de la requête
  ];

  // Exécute la requête SQL pour insérer un nouveau livre dans la base de données
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err); // Gestion des erreurs : renvoie une réponse JSON avec l'erreur en cas d'échec
    return res.json("Le livre a été créé avec succès."); // Réponse JSON en cas de réussite
  });
});



// Cette route gère les requêtes HTTP DELETE pour supprimer un livre par son ID.
app.delete("/livres/:id", (req, res) => {
  // Récupère l'ID du livre à partir des paramètres de l'URL.
  const bookId = req.params.id;
  
  // Requête SQL pour supprimer un livre de la base de données en utilisant son ID.
  const q = "DELETE FROM livres WHERE id = ?";

  // Exécute la requête SQL avec l'ID du livre à supprimer.
  db.query(q, [bookId], (err, data) => {
    if (err) {
      // En cas d'erreur lors de la suppression, renvoie une réponse JSON avec l'erreur.
      return res.json(err);
    }
    
    // Si la suppression réussit, renvoie une réponse JSON indiquant que le livre a été supprimé avec succès.
    return res.json("Le livre a été supprimé avec succès.");
  });
});



// Démarrage du serveur Express sur le port 8800
app.listen(8800, () => {
  console.log("Connected to backend!"); // Affiche un message lorsque le serveur démarre
});