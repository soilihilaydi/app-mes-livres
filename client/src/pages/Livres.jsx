// Import de la bibliothèque React et d'autres dépendances
import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

// Définition du composant fonctionnel "Livres"
const Livres = () => {
  // eslint-disable-next-line
  const [livres, setLivres] = useState([]); // État local pour stocker la liste des livres

  // Utilisation de useEffect pour effectuer une requête lors du chargement du composant
  useEffect(() => {
    const fetchAllLivres = async () => {
      try {
        const res = await axios.get("http://localhost:8800/Livres"); // Requête GET vers l'API
        setLivres(res.data); // Mise à jour de l'état avec les données récupérées
      } catch (err) {
        console.log(err); // Gestion des erreurs
      }
    };
    fetchAllLivres(); // Appel de la fonction pour charger les livres au montage du composant
  }, []); // Le tableau vide en second argument signifie que useEffect s'exécute une seule fois au montage



  // Cette fonction asynchrone gère la suppression d'un livre en utilisant une requête HTTP DELETE.
const handleDelete = async (id) => {
  try {
    // Envoie une requête DELETE à l'URL spécifiée pour supprimer le livre avec l'ID donné.
    await axios.delete("http://localhost:8800/Livres/" + id);

    // Recharge la page actuelle après la suppression réussie.
    window.location.reload();
  } catch (err) {
    // En cas d'erreur lors de la suppression, affiche l'erreur dans la console.
    console.log(err);
  }
};

  return (
    <div>
      <h1>Mes Livres</h1>
      <div className="livres">
        {/* Mapping à travers la liste des livres et affichage suppression et mise a jour de chaque livre */}
        {livres.map(livre => (
          <div className="livre" key={livre.id}>
            {livre.cover && <img src={livre.cover} alt="" />}
            <h2>{livre.title}</h2>
            <p>{livre.desc}</p>
            <span>{livre.price}</span>
            <button className="delete" onClick={()=>handleDelete(livre.id)}>Supprimer</button>
            <button className="update"><Link to={`/update/${livre.id}`}>Mise a jour</Link></button>
          </div>
        ))}
      </div>
      {/* Bouton pour ajouter un nouveau livre avec un lien vers "/add" */}
      <button><Link to="/add">Ajouter un nouveau livre</Link></button>
    </div>
  );
};

// Export du composant "Livres" en tant que composant par défaut
export default Livres;