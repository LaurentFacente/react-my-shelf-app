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

  export default formatType;