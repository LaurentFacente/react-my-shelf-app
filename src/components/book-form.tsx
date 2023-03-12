import React, { FunctionComponent, useState } from 'react';
import Book from '../models/book';
import formatType from '../tools/format-type';
  
type Props = {
  book: Book
};

type Field = {
    value?: any,
    error?: string,
    isValid?: boolean

}

type Form = {
    name: Field,
    author: Field,
    types: Field
}
  
const BookForm: FunctionComponent<Props> = ({book}) => {

    const [form, setForm] = useState<Form>({
        name : {value: book.name, isValid: true},
        author : {value: book.author, isValid: true},
        types : {value: book.types, isValid: true} 
    })
  
  const types: string[] = [
    'Roman', 'Productivité', 'Dev Perso', 'Socio', 'Science Fiction','Sport',
    'Historique', 'Psyco', 'Philosophique', 'Combat', 'Apprentissage'
  ];

  const hasType = (type: string): boolean => {
    return form.types.value.includes(type); 
  }

  const handleInputChange =(e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = e.target.name;
    const fieldValue: string  = e.target.value;
    const newField: Field = {[fieldName]: {value: fieldValue}};

    setForm({...form, ...newField});
  }

  const selectType = (type: string, e: React.ChangeEvent<HTMLInputElement>): void => {
    const checked = e.target.checked;
    let newField: Field;

    if(checked) {
        const newTypes: string[] = form.types.value.concat([type]);
        newField = { value : newTypes };
    } else {
        const newTypes: string[] = form.types.value.filter((currentType: string) => currentType !== type);
        newField = { value : newTypes };
    }

    setForm({...form, ...{ types: newField }});
  }

   
  return (
    <form>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable"> 
            <div className="card-image">
              <img src={book.cover} alt={book.name} style={{width: '250px', margin: '0 auto'}}/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                {/* Book name */}
                <div className="form-group">
                  <label htmlFor="name">Titre</label>
                  <input id="name" name="name" type="text" className="form-control" value={form.name.value} onChange={e => handleInputChange(e)}></input>
                </div>
                {/* Book author */}
                <div className="form-group">
                  <label htmlFor="author">Auteur</label>
                  <input id="author" name="author" type="text" className="form-control" value={form.author.value} onChange={e => handleInputChange(e)}></input>
                </div>
                {/* Book types */}
                <div className="form-group">
                  <label>Types</label>
                  {types.map(type => (
                    <div key={type} style={{marginBottom: '10px'}}>
                      <label>
                        <input id={type} type="checkbox" className="filled-in" value={type} checked={hasType(type)} onChange={e => selectType(type, e)}></input>
                        <span>
                          <p className={formatType(type)}>{ type }</p>
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-action center">
                {/* Submit button */}
                <button type="submit" className="btn">Valider</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
   
export default BookForm;