// Import des composants nécessaires de react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Import des composants de pages
import Livres from "./pages/Livres"; // Page pour afficher la liste des livres
import Add from "./pages/Add";       // Page pour ajouter un livre
import Update from "./pages/Update"; // Page pour mettre à jour un livre
import "./style.css"

function App() {
  return (
    <div className="App">
      {/* Utilisation de BrowserRouter pour gérer les routes */}
      <BrowserRouter>
        {/* Utilisation de Routes pour définir les différentes routes */}
        <Routes>
          {/* Route correspondant à la page d'accueil ("/") avec le composant Livres */}
          <Route path="/" element={<Livres />} />

          {/* Route pour la page d'ajout de livre ("/add") avec le composant Add */}
          <Route path="/add" element={<Add />} />

          {/* Route pour la page de mise à jour de livre ("/update") avec le composant Update */}
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Export du composant App en tant que composant principal de l'application
export default App;


