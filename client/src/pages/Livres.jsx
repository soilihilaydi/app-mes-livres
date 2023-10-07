// Import de la bibliothèque React
import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

// Définition du composant fonctionnel "Livres"
const Livres = () => {
  // eslint-disable-next-line
  const [livres, setLivres] = useState([])

  useEffect(()=>{
    const fetchAllLivres = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/Livres")
        setLivres(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllLivres()
  },[])



  return (
  <div>
      <h1>Mes Livres</h1>
      <div className="livres" >
        {livres.map(livre=>(
          <div className="livre" key={livre.id}>
              {livre.cover && <img src={livre.cover} alt=""/>}
              <h2>{livre.title}</h2>
              <p>{livre.desc}</p>
              <span>{livre.price}</span>
          </div>
        ))}
      </div>
      <button><Link to="/add">Ajouter un nouveau livre</Link></button>
   </div>
  );
};

// Export du composant "Livres" en tant que composant par défaut
export default Livres;
