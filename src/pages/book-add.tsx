import React, { FunctionComponent, useState } from 'react';
import BookForm from '../components/book-form';
import Book from '../models/book';

const BookAdd: FunctionComponent = () => {
    const [id] = useState<number>(new Date().getTime());
    const [book] = useState<Book>(new Book(id));


return (
    <div className='row'>
    <h2 className='header center'>Ajouter un Livre</h2>
        <BookForm book={book} isEditForm={false}></BookForm>
    </div>
    );
}

export default BookAdd;
