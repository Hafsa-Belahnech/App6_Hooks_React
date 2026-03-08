import { useState, useEffect } from 'react';
//un intervalle qui s’arrête automatiquement
function Timer() {
  const [secondes, setSecondes] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSecondes((s) => s + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <p>Temps écoulé : {secondes} secondes</p>
;
}

export default Timer;
//incrémentation du compteur chaque seconde par setInterval 
//useEffect nettoie le timer
//Avec clearInterval, le compteur s'arrêterait lorsque le composant disparaîtera