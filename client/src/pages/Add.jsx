// Import de la bibliothèque React
import axios from 'axios';
import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

// Définition du composant fonctionnel "Add"
const Add = () => {
  
  // État local pour stocker les données du nouveau livre
  const [livre, setLivre] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  // Hook de navigation pour rediriger l'utilisateur
  const navigate = useNavigate;

  // Fonction pour gérer les changements dans les champs de saisie
  const handleChange = (e) => {
    setLivre((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Fonction pour gérer le clic sur le bouton "Ajouter"
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      // Envoi des données du livre au serveur via une requête POST
      await axios.post("http://localhost:8800/Livres", livre);
      
      // Redirection de l'utilisateur vers la page d'accueil après l'ajout
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  // Affichage du composant
  return ( 
    <div className='form'>
       <h1>Add New Book</h1>
       {/* Inputs pour saisir les détails du nouveau livre */}
       <input type="text" placeholder="title" onChange={handleChange} name="title"/>
       <input type="text" placeholder="desc" onChange={handleChange} name="desc" />
       <input type="number" placeholder="price" onChange={handleChange} name="price" />
       <input type="text" placeholder="cover" onChange={handleChange} name="cover" />
       {/* Bouton pour ajouter le livre */}
       <button onClick={handleClick}>Ajouter</button>
    </div>
  )
}

// Export du composant "Add" en tant que composant par défaut
export default Add;
