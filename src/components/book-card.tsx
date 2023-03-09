import React, { FunctionComponent, useState } from "react";
import Book from "../models/book";
import './book-card.css'
import formatType from "../tools/format-type";
import formatDate from "../tools/format-date";
import { useHistory } from "react-router-dom";


type Props = {
    book: Book,
    borderColor?: string,
};

const BookCard: FunctionComponent<Props> = ({book, borderColor = '#009688'}) => {

    const [color, setColor] = useState<string>();
    const history = useHistory();

    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor('#f5f5f5');
    }
    const goToBooks = (id: number) => {
        history.push(`/books/${id}`)

    }

    return (

        <div className="col s6 m4" onClick={() => goToBooks(book.id)} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
                    <div className="card vertical z-depth-5" style={{ borderColor: color }}> 
                        <div className="card-image">
                            <img src={book.cover} alt={book.name}/>
                        </div>
                        <div className="card-stacked">
                        <div className="card-content">
                            <h5>{book.name}</h5>
                            <p>{book.author}</p>
                            <p><small>{formatDate(book.created)}</small></p>
                            {book.types.map( type =>
                                <span key={type} className={formatType(type)}>{type}</span>
                            )}
                        </div>   
                        </div>
                    </div>
                </div>
        
    );

}

export default BookCard;
    
