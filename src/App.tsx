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
    <h1 className='center'>Mon étagère</h1>
    <div className='container'>
        <div className='row'>
            {books.map(({id , name, cover, author}) => (
                <div className="col s6 m4" key={id}>
                    <div className="card z-depth-5">
                        <div className="card-image">
                            <img src={cover} alt={name}/>
                        </div>
                        <div className="card-stacked">
                        <div className="card-content">
                            <h5>{name}</h5>
                            <p>{author}</p>
                        </div>   
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  </div>

 )
}
  
export default App;