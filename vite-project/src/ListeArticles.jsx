// C'est pour voir le Hook personnalisé en action
import useFetch from './useFetch';

function ListeArticles() {
  const { data, chargement, erreur } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (chargement) return <p>Chargement en cours...</p>
;
  if (erreur) return 
<p>Erreur : {erreur?.message || "Une erreur est survenue"}</p>
;

  return (
    
<ul>
      {data.map((article) => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  );
}

export default ListeArticles;
//useFetch récupère les articles JSON
// Il faut vérifier vérifier que data est un tableau avant map()