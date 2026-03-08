//Réutiliser une logique de récupération d’API
import { useState, useEffect } from 'react';


// useFetch reçoit une URL puis crée trois états : data, chargement, erreur
function useFetch(url) {
  const [data, setData] = useState(null);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    setChargement(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => setErreur(err))
      .finally(() => setChargement(false));
  }, [url]);

  return { data, chargement, erreur };
}

export default useFetch;
//Le Hook retourne ces valeurs pour les utiliser dans un composant
//fetch télécharge les données et met à jour les données
// Alors si une erreur arrive, elle est sauvegardée dans erreur
