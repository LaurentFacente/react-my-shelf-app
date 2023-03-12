import React, { FunctionComponent } from 'react';
import Book from '../models/book';
import formatType from '../tools/format-type';
  
type Props = {
  book: Book
};
  
const BookForm: FunctionComponent<Props> = ({book}) => {
  
  const types: string[] = [
    'Roman', 'Productivité', 'Dev Perso', 'Socio', 'Science Fiction','Sport',
    'Historique', 'Psyco', 'Philosophique', 'Combat', 'Apprentissage'
  ];
   
  return (
    <form>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable"> 
            <div className="card-image">
              <img src={book.cover} alt={book.name} style={{width: '250px', margin: '0 auto'}}/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                {/* Book name */}
                <div className="form-group">
                  <label htmlFor="name">Titre</label>
                  <input id="name" type="text" className="form-control"></input>
                </div>
                {/* Book author */}
                <div className="form-group">
                  <label htmlFor="author">Auteur</label>
                  <input id="author" type="text" className="form-control"></input>
                </div>
                {/* Book types */}
                <div className="form-group">
                  <label>Types</label>
                  {types.map(type => (
                    <div key={type} style={{marginBottom: '10px'}}>
                      <label>
                        <input id={type} type="checkbox" className="filled-in"></input>
                        <span>
                          <p className={formatType(type)}>{ type }</p>
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-action center">
                {/* Submit button */}
                <button type="submit" className="btn">Valider</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
   
export default BookForm;