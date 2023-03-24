import React, { FunctionComponent, useState, useEffect } from 'react';
import Book from '../models/book';
import BookCard from '../components/book-card';
import BookService from '../services/books-service';
import { Link } from 'react-router-dom';
  
const BookList: FunctionComponent = () => {
  const [books, setBooks] = useState<Book[]>([]);
  
  useEffect(() => {
   BookService.getBooks().then(books => setBooks(books));
  }, []);
  
  return (
    <div>
      <h1 className="center">My Shelf</h1>
      <div className="container"> 
        <div className="row"> 
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
        </div>
        <Link className='btn-floating btn-large waves-effect waves-light red z-depht-3'
          style={{position: 'fixed', bottom: '25px', right: '25px'}}
          to= "/book/add"
        >
          <i className='material-icons'>add</i>

        </Link> 
      </div>
    </div> 
  );
}
  
export default BookList;