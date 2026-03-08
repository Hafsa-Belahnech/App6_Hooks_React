import { useRef } from 'react';
//mettre le curseur dans un champ par un clique sur le bouton
//useRef() crée une référence vide et ref={inputRef} la relie à un champ 
//inputRef.current.focus() place le curseur dedans.

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    // current pointe vers l'élément <input>
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Tapez ici..." />
      <button onClick={handleClick}>Mettre le focus</button>
    </div>
  );
}

export default FocusInput;
//!! Le "ref" ne déclenchera pas une mise à jour du composant quand la valeur change

