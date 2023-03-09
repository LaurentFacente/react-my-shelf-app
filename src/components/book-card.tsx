import React, { FunctionComponent, useState } from "react";
import { types } from "util";
import Book from "../models/book";
import './book-card.css'

type Props = {
    book: Book,
    borderColor?: string,
    types: string
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

    const formatType = (type: string): string => {
        let color: string;
       
        switch (type) {
          case 'Roman': 
            color = 'red lighten-1'; 
            break; 
          case 'Productivité': 
            color = 'blue lighten-1'; 
            break; 
          case 'Dev Perso': 
            color = 'green lighten-1'; 
            break; 
          case 'Dev Perso': 
            color = 'brown lighten-1'; 
            break; 
          case 'Socio': 
            color = 'grey lighten-3'; 
            break; 
          case 'Science Fiction': 
            color = 'blue lighten-3'; 
            break; 
          case 'Sport': 
            color = 'deep-purple accent-1'; 
            break; 
          case 'Historique': 
            color = 'pink lighten-4'; 
            break; 
          case 'Psyco': 
            color = 'deep-purple darken-2'; 
            break; 
          case 'Philosophique': 
            color = 'lime accent-1'; 
            break; 
          case 'Apprentissage': 
            color = 'deep-orange'; 
            break; 
          default: 
            color = 'grey'; 
            break; 
        }
       
        return `chip ${color}`;
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
    
