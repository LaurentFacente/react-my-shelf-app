import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BookForm from '../components/book-form';
import Book from '../models/book';
import BookService from '../services/books-service';
 
type Params = { id: string };
  
const BookEdit: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
  const [book, setBook] = useState<Book|null>(null);
  
  useEffect(() => {
    BookService.getBook(+match.params.id).then(book => setBook(book));

  }, [match.params.id]);
    
  return (
    <div>
      { book ? (
        <div className="row">
            <h2 className="header center">Éditer { book.name }</h2>
            <BookForm book={book}></BookForm>
        </div>
      ) : (
        <h4 className="center">Aucun book à afficher !</h4>
      )}
    </div>
  );
}
  
export default BookEdit;