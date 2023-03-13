import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Book from '../models/book';
import BookService from '../services/books-service';
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

  const history = useHistory();

  const types: string[] = [
    'Roman', 'Productivité', 'Dev Perso', 'Fantastique', 'Science Fiction','Sport',
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

  const validateForm = () => {
    let newForm: Form = form;
    
    // Validator name
    if(!/^[-.,_ a-zA-Z0-9áàâäãéèêëíìîïóòôöõúùûüýÿÁÀÂÄÃÉÈÊËÍÌÎÏÓÒÔÖÕÚÙÛÜÝ:/?()']{3,50}$/.test(form.name.value)) {
      const errorMsg: string = 'Le nom du livre est requis (1-50).';
      const newField: Field = { value: form.name.value, error: errorMsg, isValid: false };
      newForm = { ...newForm, ...{ name: newField } };
    } else {
      const newField: Field = { value: form.name.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ name: newField } };
    }

    // Validator author
    if(!/^[-.,_ a-zA-Z0-9áàâäãéèêëíìîïóòôöõúùûüýÿÁÀÂÄÃÉÈÊËÍÌÎÏÓÒÔÖÕÚÙÛÜÝ:/?']{3,25}$/.test(form.author.value)) {
      const errorMsg: string = 'Lauteur du livre est requis (1-25).';
      const newField: Field = { value: form.author.value, error: errorMsg, isValid: false };
      newForm = { ...newForm, ...{ author: newField } };
    } else {
      const newField: Field = { value: form.author.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ author: newField } };
    }

    setForm(newForm);
    return newForm.name.isValid && newForm.author.isValid;
  }

  const isTypesValid = (type: string): boolean => {
    // Cas n°1: Le livre a un seul type, qui correspond au type passé en paramètre.
    // Dans ce cas on revoie false, car l'utilisateur ne doit pas pouvoir décoché ce type (sinon le pokémon aurait 0 type, ce qui est interdit)
    if (form.types.value.length === 1 && hasType(type)) {
      return false;
    }
    
    // Cas n°1: Le livre a au moins 3 types.
    // Dans ce cas il faut empêcher à l'utilisateur de cocher un nouveau type, mais pas de décocher les types existants.
    if (form.types.value.length >= 3 && !hasType(type)) { 
      return false; 
    } 
    
    // Après avoir passé les deux tests ci-dessus, on renvoie 'true', 
    // c'est-à-dire que l'on autorise l'utilisateur à cocher ou décocher un nouveau type.
    return true;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if(isFormValid) {
      book.name = form.name.value;
      book.author = form.author.value;
      book.types = form.types.value;
      BookService.updateBook(book).then(() => history.push(`/books/${book.id}`));
    }
  }

  const deleteBook = () => {
    BookService.deleteBook(book).then(() => history.push(`/books`));
  }

   
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable"> 
            <div className="card-image">
              <img src={book.cover} alt={book.name} style={{width: '250px', margin: '0 auto'}}/>
              <span className='btn-floating halfway-fab waves-effect waves-light'>
                <i onClick={deleteBook} className="material-icons">delete</i>
              </span>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                {/* Book name */}
                <div className="form-group">
                  <label htmlFor="name">Titre</label>
                  <input id="name" name="name" type="text" className="form-control" value={form.name.value} onChange={e => handleInputChange(e)}></input>
                   {/* error */}
                   {form.name.error &&
                  <div className="card-panel red accent-1"> 
                   {form.name.error} 
                  </div>} 
                </div>
                {/* Book author */}
                <div className="form-group">
                  <label htmlFor="author">Auteur</label>
                  <input id="author" name="author" type="text" className="form-control" value={form.author.value} onChange={e => handleInputChange(e)}></input>
                   {/* error */}
                   {form.author.error &&
                  <div className="card-panel red accent-1"> 
                   {form.author.error} 
                  </div>} 
                </div>
                {/* Book types */}
                <div className="form-group">
                  <label>Types</label>
                  {types.map(type => (
                    <div key={type} style={{marginBottom: '10px'}}>
                      <label>
                        <input id={type} type="checkbox" className="filled-in" value={type} disabled={!isTypesValid(type)} checked={hasType(type)} onChange={e => selectType(type, e)}></input>
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