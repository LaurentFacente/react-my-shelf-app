import React from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
import book from './models/book';
import BOOKS from './models/mock-books'

//Typage du composant App (Fonction Component) 
const App: FunctionComponent = () => { 
    //On definie un etat pour letableau livre, ici un array vide (ComponentdidMount)
    const [books, setBooks] = useState<book[]>([]);

    //On modifie l'etat du composant en chargeant nos livres avec useEffect (ComponentDidUpdate)
    useEffect(() => {
        setBooks(BOOKS);
    }, [])

 return (
    
  <div>
    <h1>Mon étagère</h1>
    <p>Il y a {books.length} livres sur mon etagère </p>
  </div>

 )
}
  
export default App;