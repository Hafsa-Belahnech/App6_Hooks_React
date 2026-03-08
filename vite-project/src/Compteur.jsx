import { useReducer } from 'react';

// État initial
const initialState = { count: 0 };

//reducer reçoit l’état actuel et l’action demandée
 function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Action non reconnue');
  }
}

function Compteur() {
  const [state, dispatch] = useReducer(reducer, initialState);
//dispatch envoie l’action
  return (
    <div>
      <p>Compteur : {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
    
</div>
  );
}//Incrémentation ou décrementation avec "count"


export default Compteur;