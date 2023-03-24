import Book from "../models/book";

export default class BookService {

    static getBooks(): Promise<Book[]> {
        return fetch('http://localhost:3001/books')
        .then(response => response.json())
        .catch(error => this.handleError(error));
    }

    static getBook(id: number): Promise<Book|null> {
        return fetch(`http://localhost:3001/books/${id}`)
        .then(response => response.json())
        .then(data => this.isEmpty(data) ? null : data)
        .catch(error => this.handleError(error));
    }

    static updateBook(book: Book):Promise<Book> {
        return fetch(`http://localhost:3001/books/${book.id}`, {
            method: 'PUT',
            body: JSON.stringify(book),
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .catch(error => this.handleError(error));
    }

    static deleteBook(book: Book):Promise<{}> {
        return fetch(`http://localhost:3001/books/${book.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .catch(error => this.handleError(error));
    }

    static addBook(book:Book):Promise<Book> {
        delete book.created;
        
        return fetch(`http://localhost:3001/books/`, {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .catch(error => this.handleError(error));
    }

    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }

    static handleError(error: Error): void {
        console.error(error);
    }
}