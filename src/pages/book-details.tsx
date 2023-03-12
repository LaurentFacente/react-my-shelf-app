import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Book from '../models/book';
import formatDate from '../tools/format-date';
import formatType from '../tools/format-type'
import BookService from '../services/books-service';
  
type Params = { id: string };
  
const BooksDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
  const [book, setBook] = useState<Book|null>(null);
  
  useEffect(() => {
    BookService.getBook(+match.params.id).then(book => setBook(book));
    
  }, [match.params.id]);
    
  return (
    <div>
      { book ? (
        <div className="row">
          <div className="col s12 m8 offset-m2"> 
            <h2 className="header center">{ book.name }</h2>
            <div className="card hoverable"> 
              <div className="card-image">
                <img src={book.cover} alt={book.name} style={{width: '350px', margin: '0 auto'}}/>
                <Link to={`/books/edit/${book.id}`} className="btn btn-floating halfway-fab waves-effect waves-light">
                  <i className='material-icons'>edit</i>
                </Link>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <table className="bordered striped">
                  <tbody>
                      <tr> 
                        <td>Titre</td>   
                        <td><strong>{ book.name }</strong></td> 
                      </tr>
                      <tr> 
                        <td>Auteur</td> 
                        <td><strong>{ book.author }</strong></td> 
                      </tr> 
                      <tr> 
                        <td>Types</td> 
                        <td>
                          {book.types.map(type => (
                           <span key={type} className={formatType(type)}>{type}</span>
                          ))}</td> 
                      </tr> 
                      <tr> 
                        <td>Date de création</td> 
                        <td>{formatDate(book.created)}</td> 
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-action">
                  <Link to="/">Retour</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4 className="center">Aucun Livres à afficher !</h4>
      )}
    </div>
  );
}
  
export default BooksDetail;