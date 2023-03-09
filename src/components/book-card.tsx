import React, { FunctionComponent, useState } from "react";
import Book from "../models/book";
import './book-card.css'

type Props = {
    book: Book,
    borderColor?: string
};

const BookCard: FunctionComponent<Props> = ({book, borderColor = '#009688'}) => {

    const [color, setColor] = useState<string>();

    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor('#f5f5f5');
    }

    const formatDate = (date: Date): string => {
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }

    return (

        <div className="col s6 m4" onMouseEnter={showBorder} onMouseLeave={hideBorder}>
                    <div className="card vertical z-depth-5" style={{ borderColor: color }}> 
                        <div className="card-image">
                            <img src={book.cover} alt={book.name}/>
                        </div>
                        <div className="card-stacked">
                        <div className="card-content">
                            <h5>{book.name}</h5>
                            <p>{book.author}</p>
                            <p><small>{formatDate(book.created)}</small></p>

                        </div>   
                        </div>
                    </div>
                </div>
        
    );

}

export default BookCard;
    
