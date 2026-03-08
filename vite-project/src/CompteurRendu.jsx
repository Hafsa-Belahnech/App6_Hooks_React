import { useRef, useEffect } from 'react';
// Pour  afficher combien de fois le composant s’est rechargé

//useEffect s’exécute après chaque affichage et incrémente le compteur
function CompteurRendu() {
  const compteur = useRef(0);

  useEffect(() => {
    compteur.current += 1;
    console.log(`Le composant a été affiché ${compteur.current} fois.`);
  });

  return <div>Regarde la console pour voir le nombre de rendus.</div>;
}

export default CompteurRendu;