import React, { FunctionComponent, useState, useEffect } from 'react';
import Book from '../models/book';
import BookCard from '../components/book-card';
import BookService from '../services/books-service';
  
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
      </div>
    </div> 
  );
}
  
export default BookList;