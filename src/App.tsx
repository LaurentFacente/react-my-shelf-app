import React from 'react';
import { FunctionComponent } from 'react';

//Typage du composant App (Fonction Component) et Typage de la const name (string) 
const App: FunctionComponent = () => { 
 const name: String = 'React';
    
 return (
  <h1>Hello, {name} !</h1>
 )
}
  
export default App;