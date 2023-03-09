import React, { FunctionComponent, useState, useEffect } from 'react';
import Book from '../models/book';
import BOOKS from '../models/mock-books';
import BookCard from '../components/book-card';
  
const BookList: FunctionComponent = () => {
  const [books, setBooks] = useState<Book[]>([]);
  
  useEffect(() => {
    setBooks(BOOKS);
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