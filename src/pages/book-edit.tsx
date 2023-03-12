import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BookForm from '../components/book-form';
import Book from '../models/book';
import BOOKS from '../models/mock-books';
 
type Params = { id: string };
  
const BookEdit: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
  const [book, setBook] = useState<Book|null>(null);
  
  useEffect(() => {
    BOOKS.forEach(book => {
      if (match.params.id === book.id.toString()) {
        setBook(book);
      }
    })
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