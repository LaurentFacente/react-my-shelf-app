import React, { FunctionComponent } from "react";
import Book from "../models/book";
import './book-card.css'

type Props = {
    book: Book,
    borderColor?: string
};

const BookCard: FunctionComponent<Props> = ({book, borderColor = '#009688'}) => {

    return (

        <div className="col s6 m4">
                    <div className="card vertical z-depth-5" style={{borderColor: borderColor}}> 
                        <div className="card-image">
                            <img src={book.cover} alt={book.name}/>
                        </div>
                        <div className="card-stacked">
                        <div className="card-content">
                            <h5>{book.name}</h5>
                            <p>{book.author}</p>
                        </div>   
                        </div>
                    </div>
                </div>
        
    );

}

export default BookCard;
    
