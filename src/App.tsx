import React from 'react';
import { FunctionComponent } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import BooksDetail from './pages/book-details';
import BookList from './pages/book-list';
import PageNotFound from './pages/404';
import BookEdit from './pages/book-edit';
import BookAdd from './pages/book-add';

//Typage du composant App (Fonction Component) 
const App: FunctionComponent = () => { 

 return (
        <Router>
               <div>
                     {/* Barre de navigation commun a toutes les pages*/}
                     <nav>
                            <div className='nav-wrapper teal'>
                                   <Link to='/' className='brand-logo center'>My Shelf</Link>
                            </div>
                     </nav>
                     {/* Systeme de gestion de Routes */}
                     <Switch>
                            <Route exact path="/" component={BookList}/>
                            <Route exact path="/books/" component={BookList}/>
                            <Route exact path="/book/add" component={BookAdd}/>
                            <Route exact path="/books/edit/:id" component={BookEdit}/>
                            <Route path="/books/:id" component={BooksDetail}/>
                            <Route component={PageNotFound} />
                     </Switch>
               </div>
        </Router>
 )
}
  
export default App;