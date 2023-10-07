// Import de la bibliothèque React
import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

// Définition du composant fonctionnel "Livres"
const Livres = () => {
  
  const [livres, setLivres] = useState([])

  useEffect(()=>{
    const fetchAllLivres = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/Livres")
        console.log(res) 
      }catch(err){
        console.log(err)
      }
    }
    fetchAllLivres()
  },[])



  return (
    // Rendu du composant : un simple div contenant le texte "livres"
    <div>livres</div>
  )
}

// Export du composant "Livres" en tant que composant par défaut
export default Livres;
